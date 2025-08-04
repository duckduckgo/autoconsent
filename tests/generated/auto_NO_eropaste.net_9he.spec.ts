import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_eropaste.net_9he', ['https://eropaste.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
