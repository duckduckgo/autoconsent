import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ring.com_cuo', ['https://ring.com/de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
