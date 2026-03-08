import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arbetet.se_5nw', ['https://arbetet.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
