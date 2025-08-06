import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmvg.de_l3c', ['https://www.bmvg.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
