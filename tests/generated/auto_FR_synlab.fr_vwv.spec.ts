import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_synlab.fr_vwv', ['https://www.synlab.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
