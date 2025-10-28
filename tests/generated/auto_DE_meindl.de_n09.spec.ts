import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_meindl.de_n09', ['https://meindl.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
