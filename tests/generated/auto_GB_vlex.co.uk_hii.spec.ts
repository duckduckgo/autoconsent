import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vlex.co.uk_hii', ['https://vlex.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
