import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_o2switch.fr_rdj', ['https://www.o2switch.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
