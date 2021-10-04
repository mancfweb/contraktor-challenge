import React from 'react';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from '@material-ui/core';

import ActionsButton from '../ActionsButton';

import {useStyles} from './styles';

const ContractCard = ({contract, onSelected, menuOptions}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {menuOptions.length > 0 ? (
        <CardHeader
          action={
            <ActionsButton
              options={menuOptions}
              handleSelected={(item) => onSelected(item, contract)}
            />
          }
          title={`#${contract.id} - ${contract.title}`}
        />
      ) : (
        <CardHeader title={`#${contract.id} - ${contract.title}`} />
      )}
      <CardContent>
        <h4>Partes</h4>
        {contract.parties ? (
          contract.parties.map((item) => (
            <div className="row" key={`partie-${item.id}`}>
              <Avatar
                alt={item.first_name}
                src={item.avatar}
                className={classes.avatar}
              />
              <span>
                <p>
                  {item.first_name} {item.last_name}
                </p>
                <p>CPF: {item.cpf}</p>
                <p>
                  {item.email} - {item.phone}
                </p>
              </span>
            </div>
          ))
        ) : (
          <span>Contrato sem partes</span>
        )}
      </CardContent>
      <CardActions>
        <p>Início: {format(new Date(contract.start_at), 'dd/MM/yyyy')}</p>
        <p>Vencimento: {format(new Date(contract.due_at), 'dd/MM/yyyy')}</p>
      </CardActions>
    </Card>
  );
};

ContractCard.propTypes = {
  contract: PropTypes.object.isRequired,
  menuOptions: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default ContractCard;
