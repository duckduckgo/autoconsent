import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiducial.fr_90i', ['https://www.fiducial.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
