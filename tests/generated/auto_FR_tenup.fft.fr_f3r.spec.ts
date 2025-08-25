import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tenup.fft.fr_f3r', ['https://tenup.fft.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
