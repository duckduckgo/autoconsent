import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kobo.com_tpc', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
