import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_haproxy.com_ll1', ['https://www.haproxy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
