// import 'date-fns';
import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import bpDatePickerStyles from './bpDatePickerStyles'

const BpDatePicker: React.FC<BpDatePickerProps> = props => {

  // Initialize datepicker with current date
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );
  const classes = bpDatePickerStyles();

  function handleDateChange(date: Date | null) {
    setSelectedDate(date);
  }

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            autoOk={props.autoOk}
            label={props.label}
            value={selectedDate}
            onChange={handleDateChange}
            format={props.format}
          />
      </MuiPickersUtilsProvider>
    </div>
  );
}

// Define interface for component props
export interface BpDatePickerProps {
  autoOk?: boolean
  label?: string
  format?: string
}

// Set default props
BpDatePicker.defaultProps = {
  autoOk: false,
  label: 'Label',
  format: 'MM/dd/yyyy'
}

export default BpDatePicker;