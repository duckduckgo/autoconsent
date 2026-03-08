import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alexhost.com_0ju', ['https://alexhost.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
