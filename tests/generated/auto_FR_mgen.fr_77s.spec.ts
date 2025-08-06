import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mgen.fr_77s', ['https://www.mgen.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
