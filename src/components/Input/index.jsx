import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {useField} from '@unform/core';
import {TextField} from '@material-ui/core';

const Input = ({name, validationMsg, ...rest}) => {
  const inputRef = useRef(null);
  const {fieldName, defaultValue, registerField, error} = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      defaultValue={defaultValue}
      error={!!error}
      helperText={error ? validationMsg : ''}
      inputRef={inputRef}
      {...rest}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  validationMsg: PropTypes.string,
};

Input.defaultProps = {
  validationMsg: 'Este campo é obrigatório',
};

export default Input;
