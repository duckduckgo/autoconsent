import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wwt.org.uk_lap', ['https://www.wwt.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
