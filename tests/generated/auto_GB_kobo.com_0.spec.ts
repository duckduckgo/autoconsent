import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kobo.com_0', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
