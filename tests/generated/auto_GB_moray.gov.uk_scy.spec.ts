import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_moray.gov.uk_scy', ['http://www.moray.gov.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
