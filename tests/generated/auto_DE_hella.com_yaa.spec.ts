import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hella.com_yaa', ['https://www.hella.com/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
