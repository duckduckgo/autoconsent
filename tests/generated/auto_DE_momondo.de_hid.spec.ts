import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_momondo.de_hid', ['https://www.momondo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
