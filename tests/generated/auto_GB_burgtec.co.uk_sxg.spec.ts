import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_burgtec.co.uk_sxg', ['https://burgtec.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
