import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'concord',
    [
        'https://www.sheerid.com/',
        'https://www.aquasec.com/',
        'https://www.triplewhale.com/',
        'https://www.diginights.com/',
        'https://cyware.com/',
    ],
    {},
);
