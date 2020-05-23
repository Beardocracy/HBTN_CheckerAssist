const url = window.location.href;
console.log(url);
const title = document.querySelector('body > main > article > h1');

console.log(title.innerHTML);

chrome.storage.sync.set({'title': title.innerHTML}, () => {
  console.log('Project Title: ' + title.innerHTML);
});

chrome.storage.sync.get(['title'], (result) => {
  console.log('Stored title: ' + result.title);
});
