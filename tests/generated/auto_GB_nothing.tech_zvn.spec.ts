import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nothing.tech_zvn', ['https://nothing.tech/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
