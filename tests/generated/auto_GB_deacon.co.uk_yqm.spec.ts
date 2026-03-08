import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_deacon.co.uk_yqm', ['https://deacon.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
