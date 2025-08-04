import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_thorlabs.com_7qd', ['https://www.thorlabs.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
