import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordnet.se_2uc', ['https://www.nordnet.se/se'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
