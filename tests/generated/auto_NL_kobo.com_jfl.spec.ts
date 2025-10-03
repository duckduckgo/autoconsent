import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_jfl', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
