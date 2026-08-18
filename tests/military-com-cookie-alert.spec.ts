import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'military-com-cookie-alert',
    ['https://jobs.military.com/career/270613/field-service-technician-atm-4617-ohio-oh-youngstown'],
    {
        testOptIn: false,
        expectedRuns: 2,
    },
);
