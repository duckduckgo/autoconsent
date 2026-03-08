import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cutlist.co.uk_0yv', ['https://cutlist.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
