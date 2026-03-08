import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dgheath.co.uk_53v', ['https://dgheath.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
