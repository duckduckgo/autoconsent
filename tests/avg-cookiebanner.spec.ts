import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'avg-cookiebanner',
    [
        'https://www.hagaziekenhuis.nl/',
        'https://www.julianakinderziekenhuis.nl/',
        'https://www.ommelanderziekenhuis.nl/',
        'https://www.gelreziekenhuizen.nl/',
        'https://www.geldersevallei.nl/',
    ],
    {
        // the banner reloads the page after a choice, so the self test cannot run
        testSelfTest: false,
    },
);
