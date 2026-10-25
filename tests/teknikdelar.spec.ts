import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'teknikdelar',
    ['https://www.teknikdelar.se/', 'https://www.teknikkdeler.no/', 'https://www.teknikdele.dk/', 'https://www.tekniikkaosat.fi/'],
    {
        testSelfTest: false,
    },
);
