import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_musix.com_pi7', ['https://www.musix.com/ch/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
