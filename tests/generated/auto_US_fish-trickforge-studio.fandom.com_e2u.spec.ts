import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_US_fish-trickforge-studio.fandom.com_e2u',
    ['https://fish-trickforge-studio.fandom.com/wiki/FISH!,_Trickforge_studio_Wiki'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] },
);
