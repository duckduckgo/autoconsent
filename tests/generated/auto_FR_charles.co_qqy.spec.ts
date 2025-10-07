import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_charles.co_qqy', ['https://www.charles.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
