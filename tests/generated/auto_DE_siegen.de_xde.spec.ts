import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_siegen.de_xde', ['https://www.siegen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
