import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_jazz.fm_nyk', ['https://jazz.fm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
