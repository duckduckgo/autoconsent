import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fullscript.com_rsu', ['https://fullscript.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
