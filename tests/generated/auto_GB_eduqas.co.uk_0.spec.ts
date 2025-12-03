import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_eduqas.co.uk_0', ['https://www.eduqas.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
