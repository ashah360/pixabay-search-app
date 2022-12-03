async function toDataURL(url: string) {
  const blob = await fetch(url).then((res) => res.blob());
  return URL.createObjectURL(blob);
}

export default async function download(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = await toDataURL(url);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
