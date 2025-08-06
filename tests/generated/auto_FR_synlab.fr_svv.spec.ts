import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_synlab.fr_svv', ['https://www.synlab.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
