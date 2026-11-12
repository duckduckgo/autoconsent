import generateCMPTests from '../playwright/runner';

generateCMPTests('cm-cookie-manager', [
    // Magento notice block with a Settings button
    'https://www.galeriebedarf.de/',
    'https://www.gallery-design.com/',
    // Standalone dialog with category checkboxes
    'https://www.pti.de/',
    'https://www.brauer-reisen.de/',
    'https://www.kroeger-bus-reisen.de/',
]);
