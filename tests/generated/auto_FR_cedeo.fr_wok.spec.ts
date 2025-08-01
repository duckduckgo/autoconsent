import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cedeo.fr_wok', ['https://www.cedeo.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
