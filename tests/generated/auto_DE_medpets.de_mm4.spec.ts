import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_medpets.de_mm4', ['https://www.medpets.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
