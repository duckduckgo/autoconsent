import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_paruvendu.fr_fpt', ['https://www.paruvendu.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
