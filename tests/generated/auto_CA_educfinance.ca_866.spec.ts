import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_educfinance.ca_866', ['https://educfinance.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
