import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abo.lemonde.fr_mp0', ['https://abo.lemonde.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
