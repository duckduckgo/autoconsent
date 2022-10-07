import { enableLogs } from "../lib/config";

export async function showOptOutStatus(
  tabId: number,
  status: "success" | "complete" | "working" | "available" | "verified" | "idle",
  cmp = '',
) {
  let title = "";
  let icon = "icons/cookie-idle.png";
  if (status === "success") {
    title = `Opt out successful! (${cmp})`;
    icon = "icons/party.png";
  } else if (status === "complete") {
    title = `Opt out complete! (${cmp})`;
    icon = "icons/tick.png";
  } else if (status === "working") {
    title = `Processing... (${cmp})`;
    icon = "icons/cog.png";
  } else if (status === "verified") {
    title = `Verified (${cmp})`;
    icon = "icons/verified.png";
  } else if (status === "idle") {
    title = "Idle";
    icon = "icons/cookie-idle.png";
  } else if (status === "available") {
    title = `Click to opt out (${cmp})`;
    icon = "icons/cookie.png";
  }
  enableLogs && console.log('Setting action state to', status);
  const action = chrome.action || chrome.pageAction;
  if (chrome.pageAction) {
    chrome.pageAction.show(tabId);
  }
  await action.setTitle({
    tabId,
    title,
  });
  await action.setIcon({
    tabId,
    path: icon,
  });
}
