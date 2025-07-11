import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_komoot.com_mh3', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
