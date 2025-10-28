import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_henaturist.net_dus', ['https://henaturist.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
