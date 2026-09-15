import generateCMPTests from '../playwright/runner';

generateCMPTests('thenounproject.com', ['https://thenounproject.com/']);

generateCMPTests('thenounproject.com', ['https://thenounproject.com/'], {
    mobile: true,
});
