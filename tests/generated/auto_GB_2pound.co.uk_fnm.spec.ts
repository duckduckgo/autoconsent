import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_2pound.co.uk_fnm', ['https://2pound.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
