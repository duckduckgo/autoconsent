import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ajptour.com_4an', ['https://ajptour.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
