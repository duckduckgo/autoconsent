import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bes.co.uk_1kd', ['https://www.bes.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
