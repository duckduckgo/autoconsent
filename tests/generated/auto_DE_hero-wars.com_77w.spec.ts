import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_DE_hero-wars.com_77w',
    ['https://www.hero-wars.com/?abded=1&splitId=87&splitName=organic_landing&variantName=old_titans'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] },
);
