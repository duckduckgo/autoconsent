import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bern.place_d5j', ['https://bern.place/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
