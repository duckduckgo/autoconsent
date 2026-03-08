import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_antaios.de_70r', ['https://antaios.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
