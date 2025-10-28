import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ofcom.org.uk_21q', ['https://www.ofcom.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
