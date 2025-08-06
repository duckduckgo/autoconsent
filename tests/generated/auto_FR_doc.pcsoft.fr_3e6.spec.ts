import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_doc.pcsoft.fr_3e6', ['https://doc.pcsoft.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
