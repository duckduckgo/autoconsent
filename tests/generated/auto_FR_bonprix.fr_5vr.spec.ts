import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bonprix.fr_5vr', ['https://www.bonprix.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
