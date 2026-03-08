import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dalivo.de_5d3', ['https://dalivo.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
