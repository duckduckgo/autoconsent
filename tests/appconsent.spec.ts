import generateCMPTests from '../playwright/runner';

generateCMPTests('appconsent', ['https://www.meteociel.fr/', 'https://www.maxifoot.fr/'], { expectPopupOpen: false });
