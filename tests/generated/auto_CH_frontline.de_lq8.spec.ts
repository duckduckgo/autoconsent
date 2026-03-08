import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frontline.de_lq8', ['https://frontline.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
