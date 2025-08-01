import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_martigny.com_3yk', ['https://www.martigny.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
