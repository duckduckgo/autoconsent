import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_emojiterra.com_6qy', ['https://emojiterra.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
