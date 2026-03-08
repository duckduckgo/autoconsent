import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cecotec.es_ebu', ['https://cecotec.es/es'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
