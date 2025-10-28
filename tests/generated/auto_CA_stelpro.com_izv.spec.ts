import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_stelpro.com_izv', ['https://www.stelpro.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
