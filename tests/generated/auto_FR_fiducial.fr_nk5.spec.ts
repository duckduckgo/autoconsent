import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fiducial.fr_nk5', ['https://www.fiducial.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
