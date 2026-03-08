import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flexibits.com_5ac', ['https://flexibits.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
