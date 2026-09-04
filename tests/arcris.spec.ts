import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'acris',
    [
        'https://www.acris.at/',
        'https://www.arctic.de/en/',
        'https://leguano.eu/',
        // shops without a reject-all button, where the opt-out saves the (default off) selection
        'https://www.befestigungsfuchs.de/',
        'https://www.bresser.de/',
    ],
    {},
);
