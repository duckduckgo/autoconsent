import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jp.redtube.com_h85', ['https://jp.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
