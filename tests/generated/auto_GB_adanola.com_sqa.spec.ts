import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_adanola.com_sqa', ['https://adanola.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
