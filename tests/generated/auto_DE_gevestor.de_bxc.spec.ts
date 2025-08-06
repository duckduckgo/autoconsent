import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gevestor.de_bxc', ['https://www.gevestor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
