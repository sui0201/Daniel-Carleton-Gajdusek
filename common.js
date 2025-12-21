// ボタンをクリックした時に実行する例
async function exportImage() {
  const element = document.querySelector("#image"); // 画像にしたい要素
  
  // 1. html2canvasでCanvasを作成
  const canvas = await html2canvas(element, {
    scale: 2, // 高解像度にするために2倍で書き出し
    useCORS: true // 外部画像を表示している場合に必要
  });

  // 2. CanvasをPNGデータURLに変換
  const dataUrl = canvas.toDataURL("image/png");

  // 3. ダウンロード用のリンクを作ってクリックさせる
  const link = document.createElement("a");
  link.download = "My-Daniel_Carleton_Gajdusek-Image.png";
  link.href = dataUrl;
  link.click();
}

async function Get_text_area(){
  const textArea = document.getElementById("inputArea").value;
  const main_text = document.getElementById("maininnertext");
  main_text.innerText = textArea;
}

// ページが読み込まれた時に実行
window.addEventListener('DOMContentLoaded', () => {
  const inputElement = document.getElementById("inputArea");

  // 入力イベントを監視
  inputElement.addEventListener('input', Get_text_area);
});

async function resetTextArea(){
  const textArea = document.getElementById("inputArea");
  textArea.value = "";
  const main_text = document.getElementById("maininnertext");
  main_text.innerText = `"ここにテキストが表示"`;
}

function exportText() {
  // 1. テキストエリアの内容を取得
  const textContent = document.getElementById("main_text").innerText;

  // 2. テキストデータをBlob形式に変換
  // 第二引数で文字コードをUTF-8に指定します
  const blob = new Blob([textContent], { type: "text/plain" });

  // 3. ダウンロード用のURLを作成
  const dataUrl = URL.createObjectURL(blob);

  // 4. リンク要素を作ってクリックさせる
  const link = document.createElement("a");
  link.download = "My-Daniel_Carleton_Gajdusek-Image.txt"; // 保存するファイル名
  link.href = dataUrl;
  link.click();

  // 5. 使い終わったメモリを解放
  URL.revokeObjectURL(dataUrl);
}

async function copyToClipboard() {
  // コピーしたいテキストを取得
  const text = document.getElementById("main_text").innerText;

  try {
    // クリップボードに書き込み
    await navigator.clipboard.writeText(text);
    alert("コピーしました！");
  } catch (err) {
    console.error("コピーに失敗しました", err);
  }
}