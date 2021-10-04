import React from 'react';
import PropTypes from 'prop-types';
import {MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

const InputCalendar = ({selectedDate, handleDateChange, openTo, ...rest}) => {
  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptLocale}>
        <DatePicker
          openTo={openTo}
          autoOk
          variant="static"
          value={selectedDate}
          onChange={handleDateChange}
          {...rest}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};

InputCalendar.propTypes = {
  selectedDate: PropTypes.object,
  openTo: PropTypes.string,
  handleDateChange: PropTypes.func.isRequired,
};

InputCalendar.defaultProps = {
  openTo: 'date',
  selectedDate: new Date(),
};

export default InputCalendar;
