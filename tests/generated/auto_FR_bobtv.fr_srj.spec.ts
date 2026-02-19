import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bobtv.fr_srj', ['https://www.bobtv.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
