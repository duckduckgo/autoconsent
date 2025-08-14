import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_notino.co.uk_3mj', ['https://www.notino.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
