import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swisscare.com_ylv', ['https://swisscare.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
