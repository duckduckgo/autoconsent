import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fsetud-cgt.fr_q3q', ['https://fsetud-cgt.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
