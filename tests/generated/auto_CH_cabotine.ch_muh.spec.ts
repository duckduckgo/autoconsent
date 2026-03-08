import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cabotine.ch_muh', ['https://cabotine.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
