import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_1v8', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
