import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ambach.at_1nr', ['https://ambach.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
