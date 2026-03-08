import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_firewalls24.de_7dp', ['https://firewalls24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
