import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'Complianz opt-out',
    [
        'https://www.thefoxandpheasant.com/food-menu/',
        'https://www.museum.de/',
        'https://www.dtv.de/',
        // Securiti flavor: preference center with only the read-only essential category and no reject-all button
        'https://www.beallsinc.com/',
    ],
    {
        testOptIn: false,
    },
);
