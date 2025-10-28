import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rivian.com_3y3', ['https://rivian.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
