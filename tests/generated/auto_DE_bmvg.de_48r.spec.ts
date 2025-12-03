import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bmvg.de_48r', ['https://www.bmvg.de/de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
