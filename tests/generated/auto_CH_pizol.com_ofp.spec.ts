import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pizol.com_ofp', ['https://pizol.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
