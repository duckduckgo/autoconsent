import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dak.de_bcv', ['https://www.dak.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
