function toggleDarkMode() {
  const body = document.body;
  if (body.style.backgroundColor === 'white') {
    body.style.backgroundColor = '#121212';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
  }
}
