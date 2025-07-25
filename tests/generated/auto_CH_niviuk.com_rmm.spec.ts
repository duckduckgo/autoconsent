import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_niviuk.com_rmm', ['https://niviuk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
