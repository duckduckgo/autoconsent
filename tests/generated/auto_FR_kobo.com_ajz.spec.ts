import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kobo.com_ajz', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
