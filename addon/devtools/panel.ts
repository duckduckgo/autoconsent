import { AuditResponseMessage } from "../../lib/messages";

type DevtoolsAuditMessage = AuditResponseMessage & { tabId: number, frameId: number }


function reconnect(): chrome.runtime.Port {
    const backgroundPageConnection = chrome.runtime.connect({
        name: "devtools-panel"
    });

    backgroundPageConnection.onMessage.addListener(function (message: DevtoolsAuditMessage) {
        const rowId = `frame-${message.frameId}`;
        if (document.getElementById(rowId) !== null) {
            // update existing row
            const td = document.getElementById(rowId).querySelectorAll('td');
            if (message.foundCmp) {
                td[4].innerText = `${message.foundCmp}`;
            }
        } else {
            const template : HTMLTemplateElement = document.querySelector('#row');
            const table = document.querySelector('tbody');
            const clone = template.content.cloneNode(true) as HTMLElement;
            clone.id = rowId
            const td = clone.querySelectorAll('td');
            td[0].innerText = `${message.frameId}`;
            td[1].innerText = `${message.url}`;
            td[4].innerText = `${message.foundCmp}`;
            table.appendChild(clone);
            table.lastElementChild.id = rowId;
        }
    });
    
    // Relay the tab ID to the background page
    const pollInterval = setInterval(() => {
        backgroundPageConnection.postMessage({
            type: 'audit',
            tabId: chrome.devtools.inspectedWindow.tabId,
        });
    }, 500);
    
    backgroundPageConnection.onDisconnect.addListener(() => {
        clearInterval(pollInterval);
        reconnect();
    });

    return backgroundPageConnection;
}

reconnect().postMessage({
    type: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId,
})