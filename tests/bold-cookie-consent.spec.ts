import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'bold-cookie-consent',
    [
        'https://www.interviewme.pl/',
        'https://zety.com/',
        'https://www.myperfectcv.co.uk/',
        'https://www.livecareer.de/',
        'https://www.moncvparfait.fr/',
        'https://www.hetperfectecv.nl/',
    ],
    {},
);
