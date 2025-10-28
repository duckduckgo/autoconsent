import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_catholic.com_x7x', ['https://www.catholic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
