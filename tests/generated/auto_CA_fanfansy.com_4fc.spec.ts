import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fanfansy.com_4fc', ['https://fanfansy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
