import generateCMPTests from '../playwright/runner';

generateCMPTests('cookieconsent3', [
    'https://playground.cookieconsent.orestbida.com/',
    // testsieger.de uses a configuration where the consent modal only shows
    // "Accept all" + "Settings"; the reject button (.pm__btn[data-role=necessary])
    // is inside the preferences modal that opens after clicking Settings.
    'https://www.testsieger.de/after-shaves/',
]);
