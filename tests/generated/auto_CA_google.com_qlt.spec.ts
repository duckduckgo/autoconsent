import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_google.com_qlt', ['https://www.google.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
