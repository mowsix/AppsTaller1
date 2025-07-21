const sound = new Howl({
  src: ['assets/audio.mp3'],
  html5: true
});

const playBtn = document.getElementById('playBtn');
const wavesContainer = document.getElementById('wavesContainer');

let isPlaying = false;
let animationFrameId = null;
let time = 0;

const waveColors = ['#ff0000', '#43ed43ff', '#0000ff'];
const waveParameters = [
  { amplitude: 40, frequency: 0.7, speed: 0.7 },
  { amplitude: 90, frequency: 0.07, speed: 0.06 },
  { amplitude: 20, frequency: 0.09, speed: 0.07 },
];

const width = 800;
const height = 200;
const step = 5;

function createWave(color) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttribute('fill', 'none');
  polyline.setAttribute('stroke', color);
  polyline.setAttribute('stroke-width', '3');

  svg.appendChild(polyline);
  wavesContainer.appendChild(svg);

  return polyline;
}

const polylines = waveColors.map(color => createWave(color));

function animateWaves() {
  polylines.forEach((polyline, index) => {
    const { amplitude, frequency, speed } = waveParameters[index];
    const points = [];

    for (let x = 0; x <= width; x += step) {
      const y = (height / 2) + Math.sin((x * frequency) + time * (index + 1)) * amplitude;
      points.push(`${x},${y}`);
    }

    polyline.setAttribute('points', points.join(' '));
  });

  time += 0.05;
  animationFrameId = requestAnimationFrame(animateWaves);
}

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    sound.play();
    isPlaying = true;
    animateWaves();
  } else {
    sound.pause();
    isPlaying = false;
    cancelAnimationFrame(animationFrameId);
  }
});
