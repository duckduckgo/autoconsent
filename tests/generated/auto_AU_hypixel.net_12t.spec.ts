import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_hypixel.net_12t', ['https://hypixel.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
