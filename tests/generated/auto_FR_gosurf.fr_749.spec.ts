import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gosurf.fr_749', ['https://gosurf.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
