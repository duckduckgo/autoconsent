import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rettie.co.uk_0', ['https://www.rettie.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
