import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bluedot.org_uas', ['https://bluedot.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
