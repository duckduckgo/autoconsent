import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_digital.gob.es_xu9', ['https://digital.gob.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
