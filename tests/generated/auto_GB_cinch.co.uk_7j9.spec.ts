import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cinch.co.uk_7j9', ['https://www.cinch.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
