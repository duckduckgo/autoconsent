import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_es.redtube.com_075', ['https://es.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
