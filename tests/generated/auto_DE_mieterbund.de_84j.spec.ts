import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterbund.de_84j', ['https://mieterbund.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
