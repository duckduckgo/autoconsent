import generateCMPTests from '../playwright/runner';

generateCMPTests('savills', ['https://search.savills.com/', 'https://www.savills.com/', 'https://www.savills.ie/']);
