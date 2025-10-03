import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_komoot.com_rde', ['https://www.komoot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
