import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_offi.fr_u7n', ['https://www.offi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
