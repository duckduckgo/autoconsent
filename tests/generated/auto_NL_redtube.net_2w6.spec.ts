import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_redtube.net_2w6', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
