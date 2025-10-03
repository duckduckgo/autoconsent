import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_arronet.se_vo5', ['https://arronet.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
