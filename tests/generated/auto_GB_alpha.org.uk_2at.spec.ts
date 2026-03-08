import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alpha.org.uk_2at', ['https://alpha.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
