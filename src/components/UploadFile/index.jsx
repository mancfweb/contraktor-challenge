import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import {CloudUpload as CloudUploadIcon} from '@material-ui/icons';

import {useStyles} from './styles';

const UploadFile = ({
  handleUploadedFiles,
  maxSize,
  accept,
  multiple,
  helpText,
}) => {
  const classes = useStyles();

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [sizeError, setSizeError] = useState(false);

  return (
    <div className={classes.root}>
      <Dropzone
        onDrop={(acceptedFiles, fileRejections) => {
          const files = [];
          acceptedFiles.map((file) => files.push(file));
          if (fileRejections.length > 0) setSizeError(true);
          if (files.length > 0) {
            setSelectedFiles(files);
            handleUploadedFiles(files);
          }
        }}
        accept={accept}
        maxSize={maxSize}
        multiple={multiple}>
        {({getRootProps, getInputProps}) => (
          <div className={classes.dropzone} {...getRootProps()}>
            <input {...getInputProps()} />
            <CloudUploadIcon style={{color: '#9BA6BE', fontSize: 38}} />
            <button type="button" className={classes.fakeButton}>
              Selecionar arquivo
            </button>
            <p>ou arraste e solte</p>
            {sizeError && <span>{sizeError}</span>}
            <span>{helpText}</span>
          </div>
        )}
      </Dropzone>
      {selectedFiles && (
        <ul className={classes.files}>
          {selectedFiles.map((item) => (
            <li key={item.name}>
              <p>
                {item.name} - {item.size}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

UploadFile.propTypes = {
  maxSize: PropTypes.number,
  accept: PropTypes.string,
  helpText: PropTypes.string,
  multiple: PropTypes.bool,
  handleUploadedFiles: PropTypes.func.isRequired,
};

UploadFile.defaultProps = {
  maxSize: 5000000,
  accept: '.pdf,.doc,.docx',
  multiple: false,
  helpText: 'No máximo 5MB, no formato .pdf, .doc ou .docx.',
};

export default UploadFile;
