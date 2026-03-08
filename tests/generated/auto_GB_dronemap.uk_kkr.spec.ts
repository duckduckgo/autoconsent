import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dronemap.uk_kkr', ['https://dronemap.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
