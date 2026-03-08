import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_depot.dev_n7y', ['https://depot.dev/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
