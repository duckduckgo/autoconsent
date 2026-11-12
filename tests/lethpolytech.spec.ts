import generateCMPTests from '../playwright/runner';

generateCMPTests('lethpolytech', ['https://lethpolytech.ca/'], { testOptIn: false });
