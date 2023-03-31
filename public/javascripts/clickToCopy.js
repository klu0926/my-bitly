
function clickToCopy() {
  const copyButton = document.querySelector('#copy-button')
  const linkText = document.querySelector('#short-url')
  const copySpan = document.querySelector('#copy-span')

  copyButton.addEventListener('click', () => {
    // copy url to clipboard
    navigator.clipboard.writeText(linkText.textContent);

    // toggle copy span
    if (copySpan.classList.contains('d-none')) {
      copySpan.classList.remove('d-none')
      setTimeout(() => {
        copySpan.classList.add('d-none')
      }, 2000);
    }
  })
}

document.addEventListener('DOMContentLoaded', clickToCopy)