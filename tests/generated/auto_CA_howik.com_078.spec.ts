import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_howik.com_078', ['https://howik.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
