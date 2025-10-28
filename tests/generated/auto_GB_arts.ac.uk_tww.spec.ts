import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_arts.ac.uk_tww', ['https://www.arts.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
