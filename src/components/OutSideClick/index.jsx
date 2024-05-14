import React from 'react';
import { Click } from './styled';

const OutSideClick = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Click className={open ? 'open' : ''} onClick={() => setOpen(!open)} />
  );
};

export default OutSideClick;
