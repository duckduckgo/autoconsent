import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cft.org.uk_828', ['https://www.cft.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
