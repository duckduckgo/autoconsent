import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_medifind.com_7kq', ['https://www.medifind.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
