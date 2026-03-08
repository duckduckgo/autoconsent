import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_biogaran.fr_it0', ['https://biogaran.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
