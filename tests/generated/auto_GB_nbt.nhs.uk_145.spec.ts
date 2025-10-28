import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nbt.nhs.uk_145', ['https://www.nbt.nhs.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
