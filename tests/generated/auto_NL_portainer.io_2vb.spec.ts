import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_portainer.io_2vb', ['https://www.portainer.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
