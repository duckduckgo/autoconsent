import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vpnpro.com_dln', ['https://vpnpro.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
