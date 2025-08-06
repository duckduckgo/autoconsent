import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lcp.fr_2i3', ['https://lcp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
