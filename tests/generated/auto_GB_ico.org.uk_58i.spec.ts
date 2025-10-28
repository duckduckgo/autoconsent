import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ico.org.uk_58i', ['https://ico.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
