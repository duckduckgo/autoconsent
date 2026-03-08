import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_cbradio.co.uk_luc', ['https://cbradio.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
