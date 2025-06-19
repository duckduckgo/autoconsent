import generateCMPTests from '../playwright/runner';
generateCMPTests('auto_AU_jlcpcb.com_efe', ['https://jlcpcb.com/'], { testOptIn: false, testSelfTest: false, onlyRegions: ['AU'] });
