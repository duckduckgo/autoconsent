import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'tarteaucitron.js',
    [
        'https://www.meingehalt.net/',
        'https://www.gartenbauverein-refrath.de/events/',
        'https://aufzug-schaefer.de/',
        'https://ssv-ev.de/',
        'https://touchportal.de/',
    ],
    {},
);
