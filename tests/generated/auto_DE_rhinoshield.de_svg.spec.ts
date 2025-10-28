import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rhinoshield.de_svg', ['https://rhinoshield.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
