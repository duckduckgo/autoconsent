import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_eqtgroup.com_4v3', ['https://eqtgroup.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
