import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bpifrance.fr_mxv', ['https://www.bpifrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
