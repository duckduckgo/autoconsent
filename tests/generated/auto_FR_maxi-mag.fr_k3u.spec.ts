import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_maxi-mag.fr_k3u', ['https://www.maxi-mag.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
