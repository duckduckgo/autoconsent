import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maitrelucas.fr_x48', ['https://maitrelucas.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
