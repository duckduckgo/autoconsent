import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_breeding.zone_mn5', ['https://breeding.zone/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
