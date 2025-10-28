import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hetas.co.uk_qq3', ['https://www.hetas.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
