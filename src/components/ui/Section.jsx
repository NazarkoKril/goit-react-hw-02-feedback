import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './section.styled';

export const Section = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div>{children}</div>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
