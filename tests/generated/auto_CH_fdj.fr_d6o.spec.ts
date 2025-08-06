import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fdj.fr_d6o', ['https://www.fdj.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
