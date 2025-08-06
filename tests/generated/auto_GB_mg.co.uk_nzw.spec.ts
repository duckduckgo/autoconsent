import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mg.co.uk_nzw', ['https://www.mg.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
