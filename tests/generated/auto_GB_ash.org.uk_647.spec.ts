import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ash.org.uk_647', ['https://ash.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
