import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_martigny.com_1yj', ['https://www.martigny.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
