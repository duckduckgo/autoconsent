import generateCMPTests from '../playwright/runner';

generateCMPTests('ons', [
    'https://www.ons.gov.uk/',
    'https://www.ons.gov.uk/census/maps/',
    'https://service-manual.ons.gov.uk/',
    'https://surveys.ons.gov.uk/sign-in/',
    'https://www.ons.gov.uk/explore-local-statistics/',
]);
