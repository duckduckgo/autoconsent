import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kobo.com_p4l', ['https://www.kobo.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
