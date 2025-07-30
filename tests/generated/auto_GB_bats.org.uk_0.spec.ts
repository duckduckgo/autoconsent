import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bats.org.uk_0', ['https://www.bats.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
