import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_it.youporn.com_uqd', ['https://it.youporn.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
