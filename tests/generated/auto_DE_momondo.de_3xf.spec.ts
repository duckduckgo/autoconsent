import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_momondo.de_3xf', ['https://www.momondo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
