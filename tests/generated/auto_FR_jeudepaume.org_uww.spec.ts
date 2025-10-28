import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeudepaume.org_uww', ['https://jeudepaume.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
