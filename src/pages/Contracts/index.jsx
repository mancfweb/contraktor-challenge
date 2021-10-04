/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {format, addDays} from 'date-fns';
import {
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

import {getPartiesRequest} from '../../store/modules/parties/actions';
import {
  getContractsRequest,
  createContractsRequest,
  deleteContractRequest,
} from '../../store/modules/contracts/actions';

import Toolbar from '../../components/Toolbar';
import SearchBar from '../../components/SearchBar';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import InputDate from '../../components/InputDate';
import UploadFile from '../../components/UploadFile';
import ContractCard from '../../components/ContractCard';
import Toast from '../../components/Toast';
import {useStyles} from './styles';

const contractOptions = [
  {
    name: 'Visualizar Contrato',
    value: 'show',
  },
  {
    name: 'Excluir Contrato',
    value: 'delete',
  },
];

function ContractsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();

  const parties = useSelector((state) => state.parties);
  const contracts = useSelector((state) => state.contracts);

  const [list, setList] = useState(contracts.data);
  const [action, setAction] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  // create contract fields
  const [createFormFields, setCreateFormFields] = useState({
    file: null,
    title: '',
    start_at: new Date(),
    due_at: addDays(new Date(), 2),
    parties: null,
  });
  const [toast, setToast] = useState({
    open: false,
    message: 'Contrato criada com sucesso!',
    type: 'success',
  });

  const handleDisableNextButton = () => {
    if (activeStep === 0 && !createFormFields.file) return true;
    if (activeStep === 1 && !createFormFields.title) return true;
    if (activeStep === 3 && !createFormFields.parties) return true;
    return false;
  };

  const handleResetCreateForm = () => {
    setCreateFormFields({
      file: null,
      title: '',
      start_at: new Date(),
      due_at: addDays(new Date(), 2),
      parties: null,
    });
  };

  const handleCloseModal = () => {
    setAction(null);
    setOpenModal(false);
    handleResetCreateForm();
  };

  const handleSelectAction = (selectedAction, selectedValue = '') => {
    setAction(selectedAction);
    if (selectedValue) setSelectedContract(selectedValue);

    if (selectedAction.value === 'show') {
      history.push(`/contract/${selectedValue.id}`);
    } else {
      setOpenModal(true);
    }
  };

  const handleOnChange = (field, value) => {
    const fields = {...createFormFields, [field]: value};
    setCreateFormFields(fields);
  };

  const handleCreateContract = () => {
    try {
      dispatch(createContractsRequest(createFormFields));
    } catch (err) {
      console.log('create error', err);
    }
  };

  const handleNextStep = () => {
    if (activeStep === 5) {
      handleCloseModal();
      setActiveStep(0);
    } else if (activeStep === 4) {
      handleCreateContract();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleConfirmDeleteContract = () => {
    try {
      dispatch(deleteContractRequest({id: selectedContract.id}));
      handleCloseModal();
    } catch (err) {
      console.log('delete error', err);
    }
  };

  const handleDoSearch = (search) => {
    const val = search.toLowerCase();
    const results = contracts.data
      .map((item) => ({
        ...item,
        tag: `${item.title}`,
      }))
      .filter((item) => item.tag.toLowerCase().indexOf(val) !== -1 || !val);
    setList(results);
  };

  const renderCreateForm = () => {
    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step key="upload">
            <StepLabel>Selecione o documento</StepLabel>
          </Step>
          <Step key="title">
            <StepLabel>Título do Contrato</StepLabel>
          </Step>
          <Step key="dates">
            <StepLabel>Inicio e Vencimento</StepLabel>
          </Step>
          <Step key="parties">
            <StepLabel>Partes do Contrato</StepLabel>
          </Step>
          <Step key="review">
            <StepLabel>Revisão</StepLabel>
          </Step>
        </Stepper>
        <div className="form">
          {activeStep === 0 && (
            <div className="form-row">
              <div className="form-col">
                <UploadFile
                  handleUploadedFiles={(files) => handleOnChange('file', files)}
                />
              </div>
            </div>
          )}

          {activeStep === 1 && (
            <div className="form-row">
              <div className="form-col">
                <TextField
                  label="Título"
                  variant="outlined"
                  onChange={(el) => handleOnChange('title', el.target.value)}
                />
              </div>
            </div>
          )}

          {activeStep === 2 && (
            <div className="form-row">
              <div className="form-col">
                <InputDate
                  label="Data de Inicio"
                  selectedDate={createFormFields.start_at}
                  handleDateChange={(value) =>
                    handleOnChange('start_at', value)
                  }
                />
              </div>
              <div className="form-col">
                <InputDate
                  label="Data de Vencimento"
                  selectedDate={createFormFields.due_at}
                  minDate={createFormFields.start_at}
                  disablePast
                  handleDateChange={(value) => handleOnChange('due_at', value)}
                />
              </div>
            </div>
          )}

          {activeStep === 3 && (
            <div className="form-row">
              <div className="form-col">
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={parties.data}
                  getOptionLabel={(option) =>
                    `${option.first_name} ${option.last_name} - ${option.cpf}`
                  }
                  filterSelectedOptions
                  onChange={(event, newValue) => {
                    handleOnChange('parties', newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      name="parties"
                      placeholder="Busque a parte por nome ou cpf"
                    />
                  )}
                />
              </div>
            </div>
          )}

          {activeStep === 4 && (
            <ul className={classes.reviewData}>
              <li>
                <p>
                  <b>Título:</b> {createFormFields.title}
                </p>
              </li>
              <li>
                <p>
                  <b>Inicio:</b>{' '}
                  {format(createFormFields.start_at, 'dd/MM/yyyy')}
                </p>
                <p>
                  <b>Vencimento:</b>{' '}
                  {format(createFormFields.due_at, 'dd/MM/yyyy')}
                </p>
              </li>
              <li>
                <p>
                  <b>Documento:</b> {createFormFields.file[0].name}
                </p>
              </li>
              <li>
                <p>
                  <b>Partes:</b>
                </p>{' '}
                <div className="parties-row">
                  {createFormFields.parties.map((item) => (
                    <p key={item.first_name}>
                      {item.first_name} {item.last_name} - {item.cpf}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          )}

          {activeStep === 5 && (
            <div className={classes.successContent}>
              <h2>Feito!</h2>
              <p>Seu contrato foi criado com sucesso.</p>
            </div>
          )}

          <div
            className="form-actions"
            style={{
              justifyContent: activeStep < 5 ? 'space-between' : 'flex-end',
            }}>
            {activeStep === 0 && (
              <Button
                onClick={() => handleCloseModal()}
                backgroundColor="#cad0dc">
                Cancelar
              </Button>
            )}
            {activeStep > 0 && activeStep < 5 && (
              <Button
                onClick={() => setActiveStep(activeStep - 1)}
                backgroundColor="#cad0dc">
                Voltar
              </Button>
            )}
            <Button
              loading={contracts.loading}
              onClick={() => handleNextStep()}
              disabled={handleDisableNextButton()}>
              <>
                {activeStep < 4 && 'Próximo'}
                {activeStep === 4 && 'Salvar Contrato'}
                {activeStep === 5 && 'Fechar'}
              </>
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderDeleteContent = () => {
    return (
      <div>
        <p>
          Você tem certeza que seja excluir o contrato{' '}
          <b>
            #{selectedContract.id} - {selectedContract.title}
          </b>{' '}
          ?
        </p>
      </div>
    );
  };

  useEffect(() => {
    if (contracts.data.length > 0) setList(contracts.data);

    if (contracts.success) {
      setActiveStep(5);
      setList(contracts.data);
      setTimeout(() => {
        handleCloseModal();
      }, 4000);
    } else if (contracts.error) {
      setToast({
        open: true,
        message: 'Algo saiu errado, tente novamente!',
        type: 'error',
      });
    }
  }, [contracts]);

  useEffect(() => {
    dispatch(getPartiesRequest());
    dispatch(getContractsRequest());
  }, [dispatch]);

  return (
    <>
      <div className={classes.root}>
        {contracts.loading && <LinearProgress />}
        <div className={classes.header}>
          <Toolbar
            title="Contratos"
            actionButtonLabel="Novo Contrato"
            handleActionButton={() =>
              handleSelectAction({name: 'Novo Contrato', value: 'create'})
            }
          />

          <div className="search">
            <SearchBar
              onChange={(ev) => handleDoSearch(ev.target.value)}
              placeholder="Busque contratos"
            />
          </div>
        </div>
        {contracts && !contracts.loading && (
          <div className={classes.container}>
            {list.map((item) => (
              <ContractCard
                key={`contract-${item.id}`}
                menuOptions={contractOptions}
                contract={item}
                onSelected={(selectedAction) =>
                  handleSelectAction(selectedAction, item)
                }
              />
            ))}
          </div>
        )}
      </div>
      {action && (
        <>
          {action.value === 'create' && (
            <Modal open={openModal} hasActions={false} size="sm">
              {renderCreateForm()}
            </Modal>
          )}
          {action.value === 'delete' && (
            <Modal
              size="sm"
              open={openModal}
              handleClose={() => handleCloseModal()}
              handleConfirm={() => handleConfirmDeleteContract()}
              loading={contracts.loading}
              title={action.name}>
              {renderDeleteContent()}
            </Modal>
          )}
        </>
      )}

      <Toast
        open={toast.open}
        message={toast.message}
        type={toast.type}
        handleClose={() => setToast({...toast, open: false})}
      />
    </>
  );
}

export default ContractsPage;
