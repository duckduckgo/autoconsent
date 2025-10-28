import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_moto-net.com_y8d', ['https://www.moto-net.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
