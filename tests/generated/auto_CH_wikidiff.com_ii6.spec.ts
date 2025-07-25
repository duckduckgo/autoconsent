import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wikidiff.com_ii6', ['https://wikidiff.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
