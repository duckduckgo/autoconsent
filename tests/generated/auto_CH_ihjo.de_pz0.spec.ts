import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ihjo.de_pz0', ['https://ihjo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
