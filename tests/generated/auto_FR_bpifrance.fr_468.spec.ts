import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_bpifrance.fr_468', ['https://www.bpifrance.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
