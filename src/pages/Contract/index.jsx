/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {Document, Page, pdfjs} from 'react-pdf';
import {IconButton, LinearProgress} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {getContractRequest} from '../../store/modules/contracts/actions';

import ContractCard from '../../components/ContractCard';

import {useStyles} from './styles';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function ContractPage() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const contractData = useSelector((state) => state.contracts);
  const {contract, loading, error} = contractData;

  const [totalPages, setTotalPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({numPages}) => {
    setTotalPages(numPages);
  };

  const handleNextPage = () => {
    if (pageNumber === totalPages) return;
    setPageNumber(pageNumber + 1);
  };

  const handlePrevPage = () => {
    if (pageNumber === totalPages) return;
    setPageNumber(pageNumber - 1);
  };

  useEffect(() => {
    dispatch(getContractRequest({id}));
  }, []);

  return (
    <div className={classes.root}>
      {error && <h2>Contrato não encontrado!</h2>}
      {loading && <LinearProgress />}
      {Object.keys(contract).length > 0 && !error && (
        <div className={classes.container}>
          <div>
            <ContractCard
              menuOptions={[]}
              contract={contract}
              onSelected={() => {}}
            />
          </div>
          <div className="pdf-content">
            <p>
              Página {pageNumber} de {totalPages}
            </p>
            <div className="actions">
              <IconButton aria-label="prev" onClick={() => handleNextPage()}>
                <ArrowBackIcon />
              </IconButton>
              <IconButton aria-label="next" onClick={() => handlePrevPage()}>
                <ArrowForwardIcon />
              </IconButton>
            </div>
            <Document
              file="http://localhost:3000/teste.pdf"
              onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </div>
      )}
    </div>
  );
}
