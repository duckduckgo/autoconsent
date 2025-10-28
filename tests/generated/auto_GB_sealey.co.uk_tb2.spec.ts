import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sealey.co.uk_tb2', ['https://www.sealey.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
