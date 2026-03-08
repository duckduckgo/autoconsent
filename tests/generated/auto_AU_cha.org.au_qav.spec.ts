import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_cha.org.au_qav', ['https://cha.org.au/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
