import React from 'react';
import { ButtonType } from './ButtonStyles';

export default function Button({type, onClick, children}) {

  return (
    <button className={ButtonType[type]} onClick={onClick}>{children}</button>
  );

}
