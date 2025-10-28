import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_htb.co.uk_m0o', ['https://www.htb.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
