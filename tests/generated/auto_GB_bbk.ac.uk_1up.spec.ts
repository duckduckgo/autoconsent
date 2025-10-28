import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bbk.ac.uk_1up', ['https://www.bbk.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
