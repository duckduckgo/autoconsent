import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gtech.co.uk_lxf', ['https://www.gtech.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
