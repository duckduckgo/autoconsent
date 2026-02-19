import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_coolblue.de_egw', ['https://www.coolblue.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
