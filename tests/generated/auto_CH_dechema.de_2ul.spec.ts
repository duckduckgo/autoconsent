import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dechema.de_2ul', ['https://dechema.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
