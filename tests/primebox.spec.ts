import generateCMPTests from "../playwright/runner";

generateCMPTests('PrimeBox CookieBar', [
    'https://inpn.mnhn.fr/accueil/index',
    'https://firmenvorteile.rh.aok.de/',
    'http://manunicast.seaes.manchester.ac.uk/',
], {}
);
