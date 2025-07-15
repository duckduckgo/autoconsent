import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sath.nhs.uk_ulg', ['https://www.sath.nhs.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
