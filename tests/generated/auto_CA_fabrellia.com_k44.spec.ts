import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fabrellia.com_k44', ['https://fabrellia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
