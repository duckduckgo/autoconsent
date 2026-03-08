import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_chalkys.com_uhu', ['https://chalkys.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
