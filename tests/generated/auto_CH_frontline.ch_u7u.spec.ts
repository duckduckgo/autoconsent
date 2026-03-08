import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frontline.ch_u7u', ['https://frontline.ch/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
