import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiducial.fr_0f2', ['https://www.fiducial.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
