import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_benelli.co.uk_ii8', ['https://benelli.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
