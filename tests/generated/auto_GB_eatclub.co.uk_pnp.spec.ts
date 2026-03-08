import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eatclub.co.uk_pnp', ['https://eatclub.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
