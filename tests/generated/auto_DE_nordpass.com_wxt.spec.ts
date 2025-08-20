import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_nordpass.com_wxt', ['https://nordpass.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
