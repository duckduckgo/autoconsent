import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_okaidi.fr_hoc', ['https://www.okaidi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
