import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bonprix.ch_opn', ['https://www.bonprix.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
