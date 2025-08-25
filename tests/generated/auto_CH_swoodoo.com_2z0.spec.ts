import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swoodoo.com_2z0', ['https://www.swoodoo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
