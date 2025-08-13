import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bb-escort.de_t83', ['https://bb-escort.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
