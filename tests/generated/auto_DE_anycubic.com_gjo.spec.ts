import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_anycubic.com_gjo', ['https://anycubic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
