import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.redtube.com_xjd', ['https://jp.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
