import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_avira.com_32h', ['https://www.avira.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
