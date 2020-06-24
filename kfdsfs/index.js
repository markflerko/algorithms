function speak() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuos = false;
  // recognition.lang = 'ru-Ru';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.onerror = (event) => {
    console.log(`It's error! ${event.error}`);
  };

  recognition.onresult = (event) => {
    const last = event.results.length - 1;
    const sayWord = event.results[last][0].transcript;
    const p = document.querySelector('.speech');
    p.textContent = sayWord;
  };
  return recognition;
}

const speech = document.createElement('p');
speech.classList.add('speech');
const bttn = document.createElement('input');
bttn.type = 'button';

const speaker = speak();
bttn.addEventListener('click', () => { speaker.start(); });

document.body.append(bttn, speech)