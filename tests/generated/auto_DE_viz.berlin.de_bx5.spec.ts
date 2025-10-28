import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_viz.berlin.de_bx5', ['https://viz.berlin.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
