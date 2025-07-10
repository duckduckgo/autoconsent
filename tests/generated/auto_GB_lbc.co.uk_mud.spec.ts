import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lbc.co.uk_mud', ['https://www.lbc.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
