import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_amsoil.com_fgr', ['https://www.amsoil.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['US'] });
