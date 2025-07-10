import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_edp24.co.uk_tve', ['https://www.edp24.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
