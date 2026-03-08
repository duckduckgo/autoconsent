import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pinterest.de_t4g', ['https://de.pinterest.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
