import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_rotowire.com_721', ['https://www.rotowire.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
