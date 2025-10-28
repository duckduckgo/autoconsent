import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bath.ac.uk_aqp', ['https://www.bath.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
