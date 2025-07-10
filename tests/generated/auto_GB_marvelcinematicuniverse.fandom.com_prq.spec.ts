import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_GB_marvelcinematicuniverse.fandom.com_prq',
    ['https://marvelcinematicuniverse.fandom.com/wiki/Marvel_Cinematic_Universe_Wiki'],
    { testOptIn: false, testSelfTest: false, onlyRegions: ['GB'] },
);
