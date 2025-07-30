import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mg.co.uk_o3u', ['https://www.mg.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
