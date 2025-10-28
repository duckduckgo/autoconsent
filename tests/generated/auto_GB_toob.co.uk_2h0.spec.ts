import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_toob.co.uk_2h0', ['https://www.toob.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
