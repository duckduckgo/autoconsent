import generateCMPTests from '../playwright/runner';

const urls = ['https://carpetaciudadana.gob.es/'];

generateCMPTests('carpetaciudadana', urls, { mobile: true });
generateCMPTests('carpetaciudadana', urls, { mobile: false });
