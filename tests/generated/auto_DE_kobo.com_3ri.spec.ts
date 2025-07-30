import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kobo.com_3ri', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
