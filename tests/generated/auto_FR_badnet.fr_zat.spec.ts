import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_badnet.fr_zat', ['https://badnet.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
