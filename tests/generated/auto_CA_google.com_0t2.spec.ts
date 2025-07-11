import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_google.com_0t2', ['https://www.google.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
