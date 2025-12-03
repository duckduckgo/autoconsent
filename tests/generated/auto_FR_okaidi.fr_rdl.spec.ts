import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_okaidi.fr_rdl', ['https://www.okaidi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
