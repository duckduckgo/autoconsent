import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dfs.co.uk_ivj', ['https://www.dfs.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
