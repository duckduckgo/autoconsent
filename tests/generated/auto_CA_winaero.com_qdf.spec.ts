import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_winaero.com_qdf', ['https://winaero.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
