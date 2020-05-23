chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { urlContains: 'intranet.hbtn.io/projects/' }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
