import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ameli.fr_6ad', ['https://www.ameli.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
