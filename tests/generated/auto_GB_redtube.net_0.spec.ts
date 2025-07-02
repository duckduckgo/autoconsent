import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_redtube.net_0', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
