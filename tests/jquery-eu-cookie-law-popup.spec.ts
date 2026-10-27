import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'jquery-eu-cookie-law-popup',
    [
        'https://e-l.unifi.it/',
        'https://openyogaclass.com/',
        'https://e-tesda.gov.ph/',
        'https://eedaiat.org/',
        'https://dthps-lernplattform.de/',
        'https://www.polycomp.bg/',
        'https://www.pmq.org.hk/',
    ],
    {},
);
