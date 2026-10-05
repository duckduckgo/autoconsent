import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'pmc',
    [
        'https://www.rollingstone.com/',
        'https://www.hollywoodreporter.com/',
        'https://www.eater.com/',
        'https://www.theverge.com/',
        'https://www.punchdrink.com/',
    ],
    {},
);
