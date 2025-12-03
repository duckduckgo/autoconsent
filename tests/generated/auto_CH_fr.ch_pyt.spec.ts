import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fr.ch_pyt', ['https://www.fr.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
