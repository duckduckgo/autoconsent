import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_o2.co.uk_0', ['https://www.o2.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
