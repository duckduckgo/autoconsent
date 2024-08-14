import generateCMPTests from "../playwright/runner";

generateCMPTests('airbnb', [
  'https://twinfinite.net/features/best-geeky-video-game-places-new-york/',
  'https://www.androidpolice.com/proton-mail-calendar-desktop-app-launched/',
  'https://www.xda-developers.com/apps-every-mac-user-should-be-using/',
],{
});
