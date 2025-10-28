import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_obr.uk_tgw', ['https://obr.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
