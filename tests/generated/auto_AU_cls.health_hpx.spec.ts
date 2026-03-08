import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cls.health_hpx', ['https://cls.health/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
