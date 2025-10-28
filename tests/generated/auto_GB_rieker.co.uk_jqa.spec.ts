import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rieker.co.uk_jqa', ['https://www.rieker.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
