import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_stimmen.com_pif', ['https://www.stimmen.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
