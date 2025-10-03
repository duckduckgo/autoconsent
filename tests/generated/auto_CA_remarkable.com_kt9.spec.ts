import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_remarkable.com_kt9', ['https://remarkable.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
