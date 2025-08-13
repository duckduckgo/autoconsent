import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seitcheck.de_aax', ['https://seitcheck.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
