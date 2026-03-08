import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bev.bund.de_k3g', ['https://bev.bund.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
