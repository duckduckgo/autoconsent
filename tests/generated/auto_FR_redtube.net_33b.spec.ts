import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_redtube.net_33b', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
