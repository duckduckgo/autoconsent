import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'atruvia-consent-layer',
    [
        'https://www.diebank.de/startseite.html',
        'https://www.genobroker.de/home.html',
        'https://www.ligabank.de/startseite.html',
        'https://www.pax-bkc.de/startseite.html',
        'https://www.psd-nuernberg.de/startseite.html',
        'https://www.sparda-bank-hamburg.de/homepage.html',
        'https://www.vr-bayernmitte.de/startseite.html',
        'https://www.vrbank-brs.de/startseite.html',
        'https://voba-rhein-erft-koeln.de/',
    ],
    {},
);
