import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_momondo.se_32c', ['https://www.momondo.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
