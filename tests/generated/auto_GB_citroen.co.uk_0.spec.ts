import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_citroen.co.uk_0', ['https://www.citroen.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
