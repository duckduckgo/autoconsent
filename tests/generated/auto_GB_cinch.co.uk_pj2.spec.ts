import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cinch.co.uk_pj2', ['https://www.cinch.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
