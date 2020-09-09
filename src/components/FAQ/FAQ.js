import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import propTypes from 'prop-types';
import {faqContents, listData} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} image={listData.image} />
    <h2>{faqContents.questionOne}</h2>
    <p>{faqContents.answerOne}</p>
    <h2>{faqContents.questionTwo}</h2>
    <p>{faqContents.answerTwo}</p>
    <h2>{faqContents.questionThree}</h2>
    <p>{faqContents.answerThree}</p>
  </Container>
);

FAQ.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
};

export default FAQ;