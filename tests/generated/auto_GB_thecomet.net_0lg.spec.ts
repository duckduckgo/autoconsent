import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thecomet.net_0lg', ['https://www.thecomet.net/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] });
