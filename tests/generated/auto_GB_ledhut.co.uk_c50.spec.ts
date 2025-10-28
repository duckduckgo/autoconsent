import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ledhut.co.uk_c50', ['https://ledhut.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
