const btn = document.getElementById('copyButton');
const status = document.getElementById('copyStatus');
const template = document.getElementById('templateText').innerText;
btn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(template);
    status.textContent = '申し込み文をコピーしました。ブログのメッセージに貼り付けて使えます。';
    btn.textContent = 'コピーしました';
  } catch (e) {
    status.textContent = 'コピーできない場合は、下の文章を長押ししてコピーしてください。';
  }
});