import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cclmhd.fr_gqt', ['https://cclmhd.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
