import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nhl.com_zok', ['https://www.nhl.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
