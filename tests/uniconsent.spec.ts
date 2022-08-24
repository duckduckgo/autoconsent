import generateCMPTests from "../playwright/runner";

generateCMPTests('Uniconsent', [
    'https://sport-stimme.de/',
    'https://www.sharethrough.com/',
], {});

generateCMPTests('Uniconsent', [
    'https://www.vivobarefoot.com/eu/',
], {
    skipRegions: ['US']
});

