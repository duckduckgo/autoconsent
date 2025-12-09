import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_emp.co.uk_ymj', ['https://www.emp.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
