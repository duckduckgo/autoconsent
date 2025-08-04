import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_vrc', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
