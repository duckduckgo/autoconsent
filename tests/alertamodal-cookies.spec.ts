import generateCMPTests from '../playwright/runner';

generateCMPTests('alertamodal-cookies', [
    'http://www.bibliotecaspublicas.es/',
    'https://www.todofp.es/',
    'https://www.becaseducacion.gob.es/',
    'https://www.infoartisticas.gob.es/',
]);
