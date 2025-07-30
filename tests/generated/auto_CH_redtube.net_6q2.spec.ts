import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_redtube.net_6q2', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
