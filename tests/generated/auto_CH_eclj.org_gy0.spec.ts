import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eclj.org_gy0', ['https://eclj.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
