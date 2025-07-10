import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sath.nhs.uk_p7l', ['https://www.sath.nhs.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
