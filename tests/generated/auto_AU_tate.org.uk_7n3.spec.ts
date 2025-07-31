import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tate.org.uk_7n3', ['https://www.tate.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
