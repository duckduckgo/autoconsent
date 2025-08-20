import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_autonotizen.de_gn0', ['https://autonotizen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
