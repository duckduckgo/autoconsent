import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'madden-tempest',
    [
        'https://www.visitpittsburgh.com/blog/thrifting-in-pittsburgh/',
        'https://www.visitspokane.com/',
        'https://www.visitsaintpaul.com/',
        'https://www.visitoverlandpark.com/',
    ],
    {},
);
