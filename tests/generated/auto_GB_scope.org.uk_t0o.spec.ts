import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_scope.org.uk_t0o', ['https://www.scope.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
