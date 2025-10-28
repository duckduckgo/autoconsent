import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_amazon.es_yc7', ['https://www.amazon.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
