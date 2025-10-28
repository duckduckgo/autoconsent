import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mkuh.nhs.uk_njl', ['https://www.mkuh.nhs.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
