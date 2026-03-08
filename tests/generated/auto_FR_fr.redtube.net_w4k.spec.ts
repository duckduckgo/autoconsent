import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.redtube.net_w4k', ['https://fr.redtube.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
