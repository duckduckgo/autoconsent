import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cinemaniacs.be_n3y', ['https://cinemaniacs.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
