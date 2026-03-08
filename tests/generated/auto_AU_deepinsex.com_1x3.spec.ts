import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_deepinsex.com_1x3', ['https://deepinsex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
