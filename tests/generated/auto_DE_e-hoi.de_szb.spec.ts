import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_e-hoi.de_szb', ['https://www.e-hoi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
