import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_co-berlin.org_yqz', ['https://co-berlin.org/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
