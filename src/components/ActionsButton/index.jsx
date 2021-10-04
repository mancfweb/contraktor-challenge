import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ITEM_HEIGHT = 48;

const ActionsButton = ({options, handleSelected}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectedOption = (selected) => {
    handleSelected(selected);
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}>
        {options.map((option) => (
          <MenuItem
            key={option.value}
            selected={option[0]}
            onClick={() => handleSelectedOption(option)}>
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

ActionsButton.propTypes = {
  options: PropTypes.array.isRequired,
  handleSelected: PropTypes.func.isRequired,
};

export default ActionsButton;
