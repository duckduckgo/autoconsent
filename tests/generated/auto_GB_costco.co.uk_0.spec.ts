import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_costco.co.uk_0', ['https://www.costco.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
