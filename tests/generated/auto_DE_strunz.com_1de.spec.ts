import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_strunz.com_1de', ['https://www.strunz.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
