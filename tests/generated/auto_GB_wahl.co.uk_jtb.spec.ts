import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_wahl.co.uk_jtb', ['https://www.wahl.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
