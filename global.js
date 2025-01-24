console.log('IT’S ALIVE!');

function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
    { url: 'index.html', title: 'Home' },
    { url: 'projects/index.html', title: 'Projects' },
    { url: 'resume/index.html', title: 'Resume' },
    { url: 'https://github.com/ddho22', title: 'GitHub'},
    { url: 'contact/index.html', title: 'Contact' }
  ];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
    const ARE_WE_HOME = document.documentElement.classList.contains('home');
    let url = p.url;
    if (!ARE_WE_HOME && !url.startsWith('http')) {
        url = '../' + url;
      }
    let title = p.title;

    let a = document.createElement('a');
    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add('current');
    }
    nav.append(a);
}

let navLinks = $$("nav a")

let currentLink = navLinks.find(
    (a) => a.host === location.host && a.pathname === location.pathname
  );

if (currentLink) {
    currentLink.classList.add('current');
}

document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <label class="color-scheme">
          Theme:
          <select>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="light dark">Automatic</option>
          </select>
      </label>`
  );

let select = document.querySelector("label.color-scheme");
  if ("colorScheme" in localStorage) {
    select.value = localStorage.colorScheme;

    document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
  }


  select.addEventListener('input', function (event) {
    localStorage.colorScheme = event.target.value;

    console.log('color scheme changed to', event.target.value);

    document.documentElement.style.setProperty('color-scheme', event.target.value);

    localStorage.colorScheme = event.target.value;
  });

let form = document.querySelector("form")

form?.addEventListener("submit", function (event) {
    event.preventDefault();
    let data = new FormData(form);
    let url = "mailto:dah013@ucsd.edu?";

    for (let [name, value] of data) {
        url =  url + encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
    }
    console.log(url);
    location.href = url.slice(0, -1) + "?";
})