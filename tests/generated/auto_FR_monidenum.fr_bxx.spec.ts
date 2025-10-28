import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monidenum.fr_bxx', ['https://monidenum.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
