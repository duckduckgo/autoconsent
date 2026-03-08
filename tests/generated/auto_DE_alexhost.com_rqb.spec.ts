import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alexhost.com_rqb', ['https://alexhost.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
