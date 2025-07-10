import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_pcgs.com_058', ['https://www.pcgs.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
