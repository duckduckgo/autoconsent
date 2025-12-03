import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mg.co.uk_fv9', ['https://www.mg.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
