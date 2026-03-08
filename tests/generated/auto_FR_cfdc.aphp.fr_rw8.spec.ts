import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cfdc.aphp.fr_rw8', ['https://cfdc.aphp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
