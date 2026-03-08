import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fccee.ugr.es_a33', ['https://fccee.ugr.es/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
