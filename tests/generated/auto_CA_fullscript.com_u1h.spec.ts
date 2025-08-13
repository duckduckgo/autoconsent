import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fullscript.com_u1h', ['https://fullscript.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
