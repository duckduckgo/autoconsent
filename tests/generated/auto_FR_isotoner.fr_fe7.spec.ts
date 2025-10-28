import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_isotoner.fr_fe7', ['https://www.isotoner.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
