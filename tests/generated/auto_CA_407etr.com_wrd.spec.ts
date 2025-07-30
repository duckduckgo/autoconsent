import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_407etr.com_wrd', ['https://www.407etr.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
