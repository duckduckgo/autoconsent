import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dera.ioe.ac.uk_wbm', ['https://dera.ioe.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
