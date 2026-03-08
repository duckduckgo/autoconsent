import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_apf-drones.com_mmb', ['https://apf-drones.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
