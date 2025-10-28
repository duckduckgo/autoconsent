import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_lboro.ac.uk_tcn', ['https://www.lboro.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
