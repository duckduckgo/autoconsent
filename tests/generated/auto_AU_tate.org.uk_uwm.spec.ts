import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tate.org.uk_uwm', ['https://www.tate.org.uk/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
