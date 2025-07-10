import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_gog.com_7nw', ['https://www.gog.com/en/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
