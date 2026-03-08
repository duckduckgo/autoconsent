import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cgxuk.co.uk_3g1', ['https://cgxuk.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
