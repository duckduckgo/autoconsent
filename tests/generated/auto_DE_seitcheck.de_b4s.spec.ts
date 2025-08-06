import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seitcheck.de_b4s', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
