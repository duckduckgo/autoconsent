import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dodl.co.uk_6cu', ['https://dodl.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
