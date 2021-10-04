import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Paper,
  Table as TableMD,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

import SearchBar from '../SearchBar';

import {useStyles} from './styles';

const Table = ({headers, data, handleSearch}) => {
  const classes = useStyles();

  const handleRandomKey = () => {
    return Math.random().toString(36).substring(2);
  };

  return (
    <TableContainer component={Paper}>
      <div className={classes.search}>
        <SearchBar
          elevation={0}
          className={classes.searchBar}
          onChange={(ev) => handleSearch(ev.target.value)}
          placeholder="Busque contratos"
        />
      </div>
      <TableMD className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell key={`th-${handleRandomKey()}`}>
                {item.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={`row-${handleRandomKey()}`}>
              {headers.map((item) => (
                <TableCell key={`col-${handleRandomKey()}`}>
                  {item.key === 'avatar' ? (
                    <Avatar src={row[item.key]} alt="Item Avatar" />
                  ) : (
                    row[item.key]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableMD>
    </TableContainer>
  );
};

Table.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default Table;
