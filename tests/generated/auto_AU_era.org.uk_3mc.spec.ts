import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_era.org.uk_3mc', ['https://era.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
