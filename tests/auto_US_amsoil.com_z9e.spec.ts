import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_US_amsoil.com_z9e', ['https://www.amsoil.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
