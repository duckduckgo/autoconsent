import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pornic.com_z2i', ['https://www.pornic.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
