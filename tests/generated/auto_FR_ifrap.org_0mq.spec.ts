import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_ifrap.org_0mq', ['https://www.ifrap.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
