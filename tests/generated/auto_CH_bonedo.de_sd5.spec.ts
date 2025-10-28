import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bonedo.de_sd5', ['https://www.bonedo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
