import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_bl.uk_n31', ['https://www.bl.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
