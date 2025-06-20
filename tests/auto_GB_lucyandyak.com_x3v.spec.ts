import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_lucyandyak.com_x3v', ['https://lucyandyak.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
