import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_brics.br_ns6', ['https://brics.br/pt-br'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
