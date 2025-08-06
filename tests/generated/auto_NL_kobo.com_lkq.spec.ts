import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_lkq', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
