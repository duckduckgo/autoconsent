import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eropaste.net_1ky', ['https://eropaste.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
