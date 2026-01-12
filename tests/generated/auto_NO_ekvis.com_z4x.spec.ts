import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ekvis.com_z4x', ['https://ekvis.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
