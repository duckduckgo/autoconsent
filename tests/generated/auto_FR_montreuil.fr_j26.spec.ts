import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_montreuil.fr_j26', ['https://www.montreuil.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
