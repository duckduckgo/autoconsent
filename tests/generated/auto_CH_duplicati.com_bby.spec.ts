import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_duplicati.com_bby', ['https://duplicati.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
