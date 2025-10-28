import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_itn.co.uk_5ze', ['https://www.itn.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
