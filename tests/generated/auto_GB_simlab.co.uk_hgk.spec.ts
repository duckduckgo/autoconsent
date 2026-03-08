import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_simlab.co.uk_hgk', ['http://www.simlab.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
