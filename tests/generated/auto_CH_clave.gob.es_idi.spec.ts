import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_clave.gob.es_idi', ['https://clave.gob.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
