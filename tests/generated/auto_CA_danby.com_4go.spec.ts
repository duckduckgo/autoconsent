import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_danby.com_4go', ['https://www.danby.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
