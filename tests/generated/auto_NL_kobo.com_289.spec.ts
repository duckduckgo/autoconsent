import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_289', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
