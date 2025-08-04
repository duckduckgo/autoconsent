import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_twinkl.co.uk_0', ['https://www.twinkl.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
