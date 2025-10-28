import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_normandie.fr_0im', ['https://www.normandie.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
