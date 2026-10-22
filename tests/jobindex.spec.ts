import generateCMPTests from '../playwright/runner';

generateCMPTests('jobindex', ['https://www.jobindex.dk/', 'https://www.it-jobbank.dk/', 'https://www.stepstone.dk/']);
