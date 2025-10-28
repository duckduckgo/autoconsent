import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ulster.ac.uk_4o8', ['https://www.ulster.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
