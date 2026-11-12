import generateCMPTests from '../playwright/runner';

// the page reloads after a choice is made, so the self-test cannot run on the original document
generateCMPTests(
    'radboud-cookie-overlay',
    ['https://www.radboudumc.nl/', 'https://www.radboudfonds.nl/', 'https://www.healthybrainstudy.nl/'],
    {
        testSelfTest: false,
    },
);
