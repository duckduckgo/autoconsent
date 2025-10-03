import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_haproxy.com_arh', ['https://www.haproxy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
