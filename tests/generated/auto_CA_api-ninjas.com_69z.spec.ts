import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_api-ninjas.com_69z', ['https://api-ninjas.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
