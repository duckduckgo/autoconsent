import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_redtube.net_ux5', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
