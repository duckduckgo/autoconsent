import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sfgate.com_lh0', ['https://www.sfgate.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
