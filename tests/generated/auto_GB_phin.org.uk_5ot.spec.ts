import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_phin.org.uk_5ot', ['https://www.phin.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
