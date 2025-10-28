import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sonoff.tech_gcj', ['https://sonoff.tech/en-de'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
