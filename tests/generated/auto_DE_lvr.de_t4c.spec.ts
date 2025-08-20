import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_lvr.de_t4c', ['https://www.lvr.de/de/nav_main/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
