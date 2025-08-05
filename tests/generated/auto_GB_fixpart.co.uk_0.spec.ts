import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fixpart.co.uk_0', ['https://fixpart.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
