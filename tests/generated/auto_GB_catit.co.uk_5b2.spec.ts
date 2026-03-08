import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_catit.co.uk_5b2', ['https://catit.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
