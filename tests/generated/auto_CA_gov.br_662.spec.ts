import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_gov.br_662', ['https://www.gov.br/pt-br'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
