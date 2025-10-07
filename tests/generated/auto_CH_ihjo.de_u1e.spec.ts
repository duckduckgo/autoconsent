import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihjo.de_u1e', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
