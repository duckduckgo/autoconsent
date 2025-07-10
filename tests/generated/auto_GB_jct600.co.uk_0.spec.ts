import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_jct600.co.uk_0', ['https://www.jct600.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
