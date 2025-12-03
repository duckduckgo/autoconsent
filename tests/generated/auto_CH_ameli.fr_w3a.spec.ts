import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ameli.fr_w3a', ['https://www.ameli.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
