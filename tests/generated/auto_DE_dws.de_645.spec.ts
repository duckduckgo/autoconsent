import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dws.de_645', ['https://www.dws.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
