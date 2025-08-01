import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ameli.fr_u9m', ['https://www.ameli.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
