import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_csp.org.uk_yn2', ['https://www.csp.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
