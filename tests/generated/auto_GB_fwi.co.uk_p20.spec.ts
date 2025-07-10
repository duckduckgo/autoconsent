import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fwi.co.uk_p20', ['https://www.fwi.co.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
