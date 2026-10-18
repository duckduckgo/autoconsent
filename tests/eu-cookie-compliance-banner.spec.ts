import generateCMPTests from '../playwright/runner';

generateCMPTests('eu-cookie-compliance-banner', ['https://www.mannheim.de/', 'https://www.physics.ox.ac.uk/', 'https://www.aa.org/']);

// older module versions do not set the popup-open class on body
generateCMPTests('eu-cookie-compliance-banner', ['https://www.lamma.toscana.it/']);

// saving category preferences stores cookie-agreed=2 with only the essential categories
generateCMPTests('eu-cookie-compliance-banner', ['https://www.turismoroma.it/'], { testSelfTest: false });
