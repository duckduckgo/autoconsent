import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_8kd', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
