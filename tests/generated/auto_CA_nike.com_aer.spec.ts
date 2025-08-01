import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_nike.com_aer', ['https://www.nike.com/ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
