import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_autodoc.co.uk_0', ['https://www.autodoc.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
