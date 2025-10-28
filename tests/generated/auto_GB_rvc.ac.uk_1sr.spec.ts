import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_rvc.ac.uk_1sr', ['https://www.rvc.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
