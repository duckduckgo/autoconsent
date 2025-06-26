import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fleshbot.com_b1u', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
