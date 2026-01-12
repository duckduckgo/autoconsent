import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_US_marvelcinematicuniverse.fandom.com_b8f',
    ['https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] },
);
