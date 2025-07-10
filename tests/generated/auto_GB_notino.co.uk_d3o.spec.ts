import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_notino.co.uk_d3o', ['https://www.notino.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
