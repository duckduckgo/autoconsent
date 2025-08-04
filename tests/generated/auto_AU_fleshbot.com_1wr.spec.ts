import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_1wr', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
