import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skinport.com_3c0', ['https://skinport.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
