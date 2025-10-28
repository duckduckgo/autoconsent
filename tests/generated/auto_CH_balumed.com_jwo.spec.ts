import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_balumed.com_jwo', ['https://balumed.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
