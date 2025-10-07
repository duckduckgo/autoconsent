import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_remarkable.com_7u3', ['https://remarkable.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
