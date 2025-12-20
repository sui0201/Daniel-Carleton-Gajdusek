// ボタンをクリックした時に実行する例
async function exportImage() {
  const element = document.querySelector("#capture"); // 画像にしたい要素
  
  // 1. html2canvasでCanvasを作成
  const canvas = await html2canvas(element, {
    scale: 2, // 高解像度にするために2倍で書き出し
    useCORS: true // 外部画像を表示している場合に必要
  });

  // 2. CanvasをPNGデータURLに変換
  const dataUrl = canvas.toDataURL("image/png");

  // 3. ダウンロード用のリンクを作ってクリックさせる
  const link = document.createElement("a");
  link.download = "my-document.png";
  link.href = dataUrl;
  link.click();
}