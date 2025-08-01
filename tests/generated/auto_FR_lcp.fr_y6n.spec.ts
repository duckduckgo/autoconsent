import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lcp.fr_y6n', ['https://lcp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
