import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_names.co.uk_kb0', ['https://www.names.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
