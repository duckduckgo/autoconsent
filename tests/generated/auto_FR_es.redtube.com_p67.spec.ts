import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_es.redtube.com_p67', ['https://es.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
