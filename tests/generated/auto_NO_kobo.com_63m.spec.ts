import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kobo.com_63m', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
