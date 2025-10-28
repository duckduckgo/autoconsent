import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_tsb.co.uk_5pb', ['https://www.tsb.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
