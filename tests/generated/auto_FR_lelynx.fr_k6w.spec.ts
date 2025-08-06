import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lelynx.fr_k6w', ['https://www.lelynx.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
