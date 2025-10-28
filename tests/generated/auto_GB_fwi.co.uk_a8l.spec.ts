import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fwi.co.uk_a8l', ['https://www.fwi.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
