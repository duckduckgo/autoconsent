import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_nexus.org.uk_vcs', ['https://www.nexus.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
