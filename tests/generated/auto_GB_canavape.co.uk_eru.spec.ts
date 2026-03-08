import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_canavape.co.uk_eru', ['https://canavape.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
