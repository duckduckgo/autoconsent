import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_devstory.net_trh', ['https://devstory.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
