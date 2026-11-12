import generateCMPTests from '../playwright/runner';

// the site reloads the page after a consent choice, so the self-test message is lost
generateCMPTests(
    'rws-app',
    [
        'https://mollerbil.se/',
        'https://motorhalland.se/',
        'https://nordemansbil.se/',
        'https://jlbilar.se/',
        'https://frontbilar.se/',
        'https://bilteam.com/',
    ],
    { testSelfTest: false },
);
