import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_blnreview.de_dwi', ['https://blnreview.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
