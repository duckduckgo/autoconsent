import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lvr.de_9fx', ['https://www.lvr.de/de/nav_main/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
