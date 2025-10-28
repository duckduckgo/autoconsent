import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_asloca.ch_axe', ['https://www.asloca.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
