import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_ubereats.com_0', ['https://www.ubereats.com/gb'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
