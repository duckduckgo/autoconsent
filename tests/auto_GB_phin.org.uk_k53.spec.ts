import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_GB_phin.org.uk_k53', ['https://www.phin.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
