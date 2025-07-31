import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_z7l', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
