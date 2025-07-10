import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_brunel.ac.uk_0', ['https://www.brunel.ac.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
