import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_siegen.de_v7m', ['https://www.siegen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
