function GetAPI(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

async function GetNewAdvice() {
  advice = await GetAPI("https://api.adviceslip.com/advice");

  let json = JSON.parse(advice);

  console.log(json);
  const adviceText = document.getElementById("adviceText");
  adviceText.textContent = json.slip.advice;
  const adviceTitle = document.getElementById("adviceTitle");
  adviceTitle.textContent = "Advice #" + json.slip.id;
}

GetNewAdvice();
