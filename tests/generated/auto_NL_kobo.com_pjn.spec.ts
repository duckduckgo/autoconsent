import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_pjn', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
