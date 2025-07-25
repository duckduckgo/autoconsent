import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bb-escort.de_uqi', ['https://bb-escort.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
