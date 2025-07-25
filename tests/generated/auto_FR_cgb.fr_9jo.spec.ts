import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_cgb.fr_9jo', ['https://www.cgb.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
