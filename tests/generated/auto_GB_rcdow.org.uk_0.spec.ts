import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rcdow.org.uk_0', ['https://rcdow.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
