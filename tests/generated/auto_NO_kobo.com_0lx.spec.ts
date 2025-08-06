import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kobo.com_0lx', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
