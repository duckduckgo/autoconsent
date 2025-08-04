import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wikifeetx.com_ssv', ['https://wikifeetx.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
