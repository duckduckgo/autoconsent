import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_unsplash.com_vd2', ['https://unsplash.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
