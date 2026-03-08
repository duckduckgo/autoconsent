import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cnsmd-lyon.fr_5cx', ['https://cnsmd-lyon.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
