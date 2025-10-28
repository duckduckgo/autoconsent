import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_freenews.fr_mpx', ['https://www.freenews.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
