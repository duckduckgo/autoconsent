import generateCMPTests from '../playwright/runner';

generateCMPTests(
    'klaxit-cookie-consent',
    ['https://etcher.balena.io/', 'https://smacc.io/', 'https://www.go2plot.de/', 'https://ecovelotour.eu/'],
    {},
);
