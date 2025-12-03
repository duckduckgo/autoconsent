import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_opodo.co.uk_0', ['https://www.opodo.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
