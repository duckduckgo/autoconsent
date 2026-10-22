import generateCMPTests from '../playwright/runner';

generateCMPTests('shinden.pl', ['https://shinden.pl/episode/61872-tensei-shitara-slime-datta-ken-3rd-season/view/231781'], {
    testSelfTest: false,
});
