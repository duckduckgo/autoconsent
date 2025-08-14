import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_otelo.de_yrq', ['https://www.otelo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
