import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edf.fr_5gg', ['https://www.edf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
