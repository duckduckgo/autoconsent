import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_gov.br_n2f', ['https://www.gov.br/pt-br'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
