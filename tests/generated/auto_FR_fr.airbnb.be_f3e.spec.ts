import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_fr.airbnb.be_f3e', ['https://fr.airbnb.be/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
