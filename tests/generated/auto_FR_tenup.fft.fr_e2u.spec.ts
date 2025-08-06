import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tenup.fft.fr_e2u', ['https://tenup.fft.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
