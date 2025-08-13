import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihjo.de_tu1', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
