import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_theaic.co.uk_6hr', ['https://www.theaic.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
