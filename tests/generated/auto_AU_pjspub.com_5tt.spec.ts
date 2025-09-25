import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_pjspub.com_5tt', ['https://pjspub.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
