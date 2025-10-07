import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_haproxy.com_r1m', ['https://www.haproxy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
