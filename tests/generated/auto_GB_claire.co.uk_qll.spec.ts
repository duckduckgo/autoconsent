import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_claire.co.uk_qll', ['http://claire.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
