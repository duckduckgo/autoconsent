import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_boyfriend.tv_vsz', ['https://www.boyfriend.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
