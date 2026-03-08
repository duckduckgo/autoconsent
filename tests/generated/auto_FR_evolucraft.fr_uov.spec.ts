import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_evolucraft.fr_uov', ['https://evolucraft.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
