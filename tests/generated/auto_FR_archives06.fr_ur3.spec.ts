import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_archives06.fr_ur3', ['https://archives06.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
