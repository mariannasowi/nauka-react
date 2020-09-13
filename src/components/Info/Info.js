import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import propTypes from 'prop-types';
import {infoContents} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} />
  </Container>
);

Info.propTypes = {
  title: propTypes.string,
};

export default Info;