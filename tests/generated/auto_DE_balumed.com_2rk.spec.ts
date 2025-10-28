import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_balumed.com_2rk', ['https://balumed.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
