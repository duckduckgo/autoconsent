import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_edf-oa.fr_pn6', ['https://www.edf-oa.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
