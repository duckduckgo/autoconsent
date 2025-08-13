import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gotronic.fr_yoy', ['https://www.gotronic.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
