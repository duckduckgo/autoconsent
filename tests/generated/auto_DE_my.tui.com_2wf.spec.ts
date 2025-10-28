import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_my.tui.com_2wf', ['https://my.tui.com/n/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
