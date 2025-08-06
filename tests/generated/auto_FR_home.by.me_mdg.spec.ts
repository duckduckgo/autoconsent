import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_home.by.me_mdg', ['https://home.by.me/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
