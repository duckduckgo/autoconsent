import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_finds.org.uk_n7g', ['https://finds.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
