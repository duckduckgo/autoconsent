import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_balises.bpi.fr_63o', ['https://balises.bpi.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
