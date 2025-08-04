import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kobo.com_25i', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
