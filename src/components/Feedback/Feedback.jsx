import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './feedback.styled';
import { BiCool, BiFace, BiAngry } from 'react-icons/bi';

const Feedback = ({ handleFunc }) => {
  return (
    <>
      <ButtonList>
        <li>
          <Button type="button" id="good" onClick={handleFunc}>
            Good <BiCool />
          </Button>
        </li>
        <li>
          <Button type="button" id="neutral" onClick={handleFunc}>
            Neutral <BiFace />
          </Button>
        </li>
        <li>
          <Button type="button" id="bad" onClick={handleFunc}>
            Bad <BiAngry />
          </Button>
        </li>
      </ButtonList>
    </>
  );
};

Feedback.propTypes = {
  handleFunc: PropTypes.func.isRequired,
};

export default Feedback;
