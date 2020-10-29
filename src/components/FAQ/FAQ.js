import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContents} from '../../data/dataStore';
import styles from './Faq.scss';

const Faq = () => (
  <div className={styles.component}>
    <Container>
      <Hero titleText={faqContents.title} />
      <p>{faqContents.text}</p>
    </Container>
  </div>
);

export default Faq;