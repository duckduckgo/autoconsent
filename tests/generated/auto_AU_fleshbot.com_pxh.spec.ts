import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_fleshbot.com_pxh', ['https://fleshbot.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
