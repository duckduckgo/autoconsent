import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elwing.co_n3j', ['https://elwing.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
