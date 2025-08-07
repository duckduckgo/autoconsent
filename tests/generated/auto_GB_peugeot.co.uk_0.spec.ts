import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_peugeot.co.uk_0', ['https://www.peugeot.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
