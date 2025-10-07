import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seitcheck.de_c3t', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
