import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_forbes.fr_t3z', ['https://www.forbes.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
