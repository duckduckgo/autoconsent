import generateCMPTests from '../../playwright/runner';
generateCMPTests(
    'auto_AU_lemonde.fr_jgt',
    ['https://www.lemonde.fr/en/opinion/article/2024/03/21/will-china-really-become-the-world-s-leading-economic-power_6640185_23.html'],
    { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] },
);
