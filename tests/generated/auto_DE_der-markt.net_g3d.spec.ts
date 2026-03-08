import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_der-markt.net_g3d', ['https://der-markt.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
