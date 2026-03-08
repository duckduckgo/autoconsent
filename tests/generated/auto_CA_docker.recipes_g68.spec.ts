import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_docker.recipes_g68', ['https://docker.recipes/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
