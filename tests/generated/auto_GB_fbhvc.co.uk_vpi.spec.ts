import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fbhvc.co.uk_vpi', ['https://fbhvc.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
