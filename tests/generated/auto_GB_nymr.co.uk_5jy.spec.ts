import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nymr.co.uk_5jy', ['https://www.nymr.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
