import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_9w7', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
