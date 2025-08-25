import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fdj.fr_77a', ['https://www.fdj.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
