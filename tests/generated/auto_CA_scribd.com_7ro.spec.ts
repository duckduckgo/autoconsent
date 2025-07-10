import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_scribd.com_7ro', ['https://www.scribd.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
