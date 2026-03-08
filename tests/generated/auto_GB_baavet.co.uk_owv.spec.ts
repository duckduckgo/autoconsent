import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baavet.co.uk_owv', ['https://baavet.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
