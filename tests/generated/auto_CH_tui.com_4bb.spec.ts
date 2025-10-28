import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tui.com_4bb', ['https://www.tui.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
