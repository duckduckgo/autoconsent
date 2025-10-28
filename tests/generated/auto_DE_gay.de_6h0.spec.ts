import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gay.de_6h0', ['https://www.gay.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
