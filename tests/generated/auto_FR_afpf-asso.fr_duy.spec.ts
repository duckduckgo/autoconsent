import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_afpf-asso.fr_duy', ['https://afpf-asso.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
