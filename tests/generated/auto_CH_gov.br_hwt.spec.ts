import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gov.br_hwt', ['https://www.gov.br/pt-br'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
