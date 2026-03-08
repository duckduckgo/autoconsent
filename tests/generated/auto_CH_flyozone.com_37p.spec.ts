import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_flyozone.com_37p', ['https://flyozone.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
