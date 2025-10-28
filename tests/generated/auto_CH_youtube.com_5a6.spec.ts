import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_youtube.com_5a6', ['https://www.youtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
