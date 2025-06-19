import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_lucyandyak.com_0n3', ['https://lucyandyak.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
