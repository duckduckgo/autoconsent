import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rexel.co.uk_0', ['https://www.rexel.co.uk/uki/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
