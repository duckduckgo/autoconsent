import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_size.co.uk_2nx', ['https://www.size.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
