import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterbund.de_dxd', ['https://mieterbund.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
