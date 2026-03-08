import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_c4mhub.com_l7t', ['https://c4mhub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
