import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_everand.com_ll4', ['https://www.everand.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['CA'] });
