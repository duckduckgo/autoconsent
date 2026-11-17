import generateCMPTests from '../playwright/runner';

generateCMPTests('pitt-edu', ['https://admissions.pitt.edu/visit/schedule/', 'https://financialaid.pitt.edu/'], {});
