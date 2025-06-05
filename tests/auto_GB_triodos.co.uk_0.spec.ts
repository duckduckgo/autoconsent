import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_triodos.co.uk_0', ['https://www.triodos.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
