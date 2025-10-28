import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_flogas.co.uk_nw0', ['https://www.flogas.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
