import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gotronic.fr_x8m', ['https://www.gotronic.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
