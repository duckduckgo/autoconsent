import generateCMPTests from '../playwright/runner';

generateCMPTests('amasty-gdpr-sidebar', [
    // Save selection button only
    'https://www.jarbo.se/',
    'https://www.badgematic.de/',
    'https://www.dekaartendrukkerij.nl/',
    'https://www.caterite.co.uk/',
    // Decline button
    'https://www.kedo.de/',
    'https://proedinc.com/',
    'https://millermedicalsupplies.com/',
    // Customized templates with a decline button
    'https://www.monnaiedeparis.fr/',
    'https://aminoexpert.com/',
]);
