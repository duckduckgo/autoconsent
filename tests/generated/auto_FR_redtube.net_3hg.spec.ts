import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_redtube.net_3hg', ['https://www.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
