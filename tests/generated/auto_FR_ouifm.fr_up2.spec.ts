import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ouifm.fr_up2', ['https://www.ouifm.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
