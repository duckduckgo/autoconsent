import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_anker.com_qh7', ['https://www.anker.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
