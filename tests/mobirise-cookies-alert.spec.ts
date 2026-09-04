import generateCMPTests from '../playwright/runner';

// Implied-consent flavour: a single dismiss button, handled cosmetically.
generateCMPTests('mobirise-cookies-alert', ['https://www.asd-ste100.org/', 'https://www.baumschule-roehler.de/'], {});

// Explicit-consent flavour: a real reject button, in a bottom bar or in a custom dialog.
generateCMPTests(
    'mobirise-cookies-alert',
    ['https://www.carsystemsrl.it/', 'https://technikmuseum-puetnitz.de/', 'https://cestazasnem.cz/'],
    {},
);
