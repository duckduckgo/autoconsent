import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rdvartisans.fr_kme', ['https://rdvartisans.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
