import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eropaste.net_rgb', ['https://eropaste.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
