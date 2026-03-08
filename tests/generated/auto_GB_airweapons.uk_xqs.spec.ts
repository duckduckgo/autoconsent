import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_airweapons.uk_xqs', ['https://airweapons.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
