import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_es.fr_9lv', ['https://www.es.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
