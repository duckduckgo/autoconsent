import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uhs.nhs.uk_row', ['https://www.uhs.nhs.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
