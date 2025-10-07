import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_parcelsapp.com_fvy', ['https://parcelsapp.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
