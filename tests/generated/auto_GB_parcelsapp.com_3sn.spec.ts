import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcelsapp.com_3sn', ['https://parcelsapp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
