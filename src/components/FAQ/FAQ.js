import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';
import propTypes from 'prop-types';

const FAQ = () => (
  <Container>
    <Hero titleText={ faqContents.title } />
    <h2>{ faqContents.question }</h2>
    <p>{ faqContents.answer }</p>
  </Container>
);

FAQ.propTypes = {
  title: propTypes.string,
};

export default FAQ;