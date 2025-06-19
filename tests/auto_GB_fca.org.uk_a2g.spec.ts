import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_fca.org.uk_a2g', ['https://www.fca.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
