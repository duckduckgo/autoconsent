import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_find.ugnas.com_9x1', ['https://find.ugnas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
