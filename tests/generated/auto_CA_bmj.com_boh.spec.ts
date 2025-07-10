import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bmj.com_boh', ['https://www.bmj.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
