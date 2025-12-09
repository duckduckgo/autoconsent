import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_danby.com_g6i', ['https://www.danby.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
