import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_maps.nls.uk_ep2', ['https://maps.nls.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
