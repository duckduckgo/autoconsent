import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_amayama.com_kw8', ['https://www.amayama.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
