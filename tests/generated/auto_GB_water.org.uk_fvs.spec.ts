import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_water.org.uk_fvs', ['https://www.water.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
