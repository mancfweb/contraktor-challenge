import React from 'react';
import PropTypes from 'prop-types';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

const InputDate = ({label, selectedDate, handleDateChange, ...rest}) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
      <KeyboardDatePicker
        autoOk
        animateYearScrolling
        inputVariant="outlined"
        label={label}
        format="dd/MM/yyyy"
        value={selectedDate}
        onChange={(date) => handleDateChange(date)}
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

InputDate.propTypes = {
  label: PropTypes.string.isRequired,
  selectedDate: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  handleDateChange: PropTypes.func.isRequired,
};

InputDate.defaultProps = {
  selectedDate: new Date(),
};

export default InputDate;
