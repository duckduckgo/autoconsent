import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_adopteunmec.com_xys', ['https://www.adopte.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
