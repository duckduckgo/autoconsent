import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bb-escort.de_udr', ['https://bb-escort.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
