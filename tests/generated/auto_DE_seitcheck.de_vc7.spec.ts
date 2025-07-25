import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seitcheck.de_vc7', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
