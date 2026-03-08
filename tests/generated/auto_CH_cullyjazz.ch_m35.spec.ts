import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cullyjazz.ch_m35', ['https://cullyjazz.ch/fr'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
