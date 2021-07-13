import React from 'react';
import { CustomButton } from './styles';
import { string } from 'prop-types';

const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

Button.propTypes = {
  children: string,
};

export default Button;
