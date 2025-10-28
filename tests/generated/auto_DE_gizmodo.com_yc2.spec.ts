import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gizmodo.com_yc2', ['https://gizmodo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
