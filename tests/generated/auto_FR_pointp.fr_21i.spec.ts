import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pointp.fr_21i', ['https://www.pointp.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
