import generateCMPTests from '../playwright/runner';

generateCMPTests('readly', ['https://go.readly.com/discover', 'https://www.readly.co/de/offers', 'https://www.readly.co/fr/offers'], {});
