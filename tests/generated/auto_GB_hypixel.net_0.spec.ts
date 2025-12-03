import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hypixel.net_0', ['https://hypixel.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
