import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hypixel.net_cmk', ['https://hypixel.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
