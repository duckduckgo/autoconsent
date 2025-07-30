import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_cam4.eu_dka', ['https://www.cam4.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
