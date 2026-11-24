import generateCMPTests from '../playwright/runner';

generateCMPTests('imarina', [
    'https://portalcientifico.upm.es/es/',
    'https://portalcientifico.uam.es/es/',
    'https://panorama.upv.es/es/',
    'https://portalcientifico.urjc.es/es/',
]);
