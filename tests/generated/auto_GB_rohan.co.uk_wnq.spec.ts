import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rohan.co.uk_wnq', ['https://www.rohan.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
