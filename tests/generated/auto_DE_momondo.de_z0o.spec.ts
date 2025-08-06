import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_momondo.de_z0o', ['https://www.momondo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
