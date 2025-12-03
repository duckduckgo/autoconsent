import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strunz.com_vtz', ['https://www.strunz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
