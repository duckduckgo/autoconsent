import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rac.co.uk_sho', ['https://www.rac.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
