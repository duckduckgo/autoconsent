import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strunz.com_mdu', ['https://www.strunz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
