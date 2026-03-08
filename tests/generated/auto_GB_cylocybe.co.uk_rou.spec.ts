import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cylocybe.co.uk_rou', ['https://cylocybe.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
