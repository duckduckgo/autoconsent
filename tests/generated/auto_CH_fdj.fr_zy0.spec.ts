import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fdj.fr_zy0', ['https://www.fdj.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
