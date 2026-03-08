import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_em-sued.de_5ob', ['https://em-sued.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
