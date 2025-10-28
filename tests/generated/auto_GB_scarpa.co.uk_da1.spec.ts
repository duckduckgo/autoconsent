import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scarpa.co.uk_da1', ['https://www.scarpa.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
