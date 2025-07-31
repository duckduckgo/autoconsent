import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mg.co.uk_p8t', ['https://www.mg.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
