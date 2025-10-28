import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lextronic.fr_gx0', ['https://www.lextronic.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
