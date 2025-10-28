import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_foyles.co.uk_0ed', ['https://www.foyles.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
