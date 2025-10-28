import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_danby.com_tvf', ['https://www.danby.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
