// Sets the title to the project's title, using the storage api. Value was set
// in the content.js file.
chrome.storage.sync.get(['title'], (result) => {
  document.querySelector('#project_title').innerHTML = result.title;
});
