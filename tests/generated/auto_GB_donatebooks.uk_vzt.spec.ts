import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_donatebooks.uk_vzt', ['https://donatebooks.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
