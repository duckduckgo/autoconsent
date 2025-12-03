import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thorlabs.com_x28', ['https://www.thorlabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
