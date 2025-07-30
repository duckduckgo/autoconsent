import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_5mt', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
