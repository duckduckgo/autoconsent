import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bonprix.ch_pex', ['https://www.bonprix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
