import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fleshbot.com_bw3', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
