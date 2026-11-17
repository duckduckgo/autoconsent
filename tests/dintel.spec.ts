import generateCMPTests from '../playwright/runner';

generateCMPTests('dintel', [
    'https://mptmd.sede.gob.es/',
    'https://mpr.sede.gob.es/',
    'https://igualdad.sede.gob.es/',
    'https://cultura.sede.gob.es/',
    'https://mivau.sede.gob.es/',
    'https://ciencia.sede.gob.es/',
]);
