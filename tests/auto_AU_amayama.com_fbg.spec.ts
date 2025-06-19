import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_amayama.com_fbg', ['https://www.amayama.com/en'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
