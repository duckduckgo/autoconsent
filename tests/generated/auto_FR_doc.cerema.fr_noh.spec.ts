import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_doc.cerema.fr_noh', ['https://doc.cerema.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
