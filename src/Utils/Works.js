import devscreen from '../Assets/img/devscreen.png'
import moviesApp from '../Assets/img/moviesApp.png'
import portfolio from '../Assets/img/portfolio.png'
import ticTacToe from '../Assets/img/ticTacToe.png'
import timerApp from '../Assets/img/timer-app.png'
import ttsApp from '../Assets/img/tts-app.png'
import weJapa from '../Assets/img/weJapa.png'

const Works = () => {
  return [
    {
      id: 10,
      title: 'Portfolio site',
      description: 'My portfolio website built with React',
      url: '',
      image: portfolio,
      repo: 'https://github.com/mosco98/portfolio'
    },
    {
      id: 1,
      title: 'Countdown Timer App',
      description: 'A simple countdown timer app built with React',
      url: 'https://moscode-timer-app.netlify.app/',
      image: timerApp,
      repo: 'https://github.com/mosco98/countdown-timer-app'
    },
    {
      id: 2,
      title: 'Devscreen',
      description: 'A chrome extension that updates users(developers) daily with articles from top Dev blogs',
      url: 'http://devscreen.online',
      image: devscreen,
      repo: 'https://github.com/mosco98/devscreen-react'
    },
    {
      id: 3,
      title: 'weJapa Web App',
      description: 'A simple web app for the weJapa startup(Hackathon) built with React',
      url: 'https://wejapa-hackathon-moscode.netlify.app/',
      image: weJapa,
      repo: 'https://github.com/mosco98/we-japa'
    },

    {
      id: 4,
      title: 'Text To Speech App',
      description:
        'A text to speech app that converts texts to speech and lets the user download the converted texts as audio and can also create an account to save converted audio files online ',
      url: 'https://moscode-tts-app.netlify.app/',
      image: ttsApp,
      repo: 'https://github.com/mosco98/Text-to-speech-App'
    },
    {
      id: 5,
      title: 'Movies App',
      description: 'A simple movie app that gives users overview of any movie before they go see it.',
      url: 'https://secure-brook-53316.herokuapp.com/',
      image: moviesApp,
      repo: 'https://github.com/mosco98/movies'
    },
    {
      id: 6,
      title: 'Tic Tac Toe Game',
      description: 'Tic Tac Toe game built with React',
      url: 'https://moscode-tic-tac-toe.netlify.app/',
      image: ticTacToe,
      repo: 'https://github.com/mosco98/TicTacToe'
    }
  ]
}

export default Works
