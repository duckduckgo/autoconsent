import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_serebii.net_x33', ['https://www.serebii.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
