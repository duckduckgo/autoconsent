import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mgen.fr_js5', ['https://www.mgen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
