import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bequiet.com_zfx', ['https://www.bequiet.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
