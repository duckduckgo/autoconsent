import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_artopps.co.uk_3fk', ['https://artopps.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
