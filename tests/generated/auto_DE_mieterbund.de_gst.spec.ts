import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mieterbund.de_gst', ['https://mieterbund.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
