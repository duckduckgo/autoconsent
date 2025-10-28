import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hes-so.ch_f76', ['https://www.hes-so.ch/accueil'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
