import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_radiox.co.uk_y3z', ['https://www.radiox.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
