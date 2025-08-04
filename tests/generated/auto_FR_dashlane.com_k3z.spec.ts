import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_dashlane.com_k3z', ['https://www.dashlane.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
