import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_es.fr_jw4', ['https://www.es.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
