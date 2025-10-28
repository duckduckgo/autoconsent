import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parks.uk.com_ccu', ['https://www.parks.uk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
