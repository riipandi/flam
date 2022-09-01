import useKeyPress from './hooks/useKeyPress'

import tom from './assets/sounds/tom.wav'
import boom from './assets/sounds/boom.wav'
import clap from './assets/sounds/clap.wav'
import hithat from './assets/sounds/hihat.wav'
import kick from './assets/sounds/kick.wav'
import openhat from './assets/sounds/openhat.wav'
import ride from './assets/sounds/ride.wav'
import snare from './assets/sounds/snare.wav'
import tink from './assets/sounds/tink.wav'

export default function App() {
  // Call our hook for each key that we'd like to monitor
  const tomSound: boolean = useKeyPress('a', tom)
  const boomSound: boolean = useKeyPress('s', boom)
  const clapSound: boolean = useKeyPress('d', clap)
  const hithatSound: boolean = useKeyPress('f', hithat)
  const kickSound: boolean = useKeyPress('g', kick)
  const openhatSound: boolean = useKeyPress('h', openhat)
  const rideSound: boolean = useKeyPress('j', ride)
  const snareSound: boolean = useKeyPress('k', snare)
  const tinkSound: boolean = useKeyPress('l', tink)

  return (
    <div className='App'>
      <h1>Flam Drumkit</h1>
      <div className='drums'>
        <button>{tomSound ? 'tom' : 'a'}</button>
        <button>{boomSound ? 'boom' : 's'}</button>
        <button>{clapSound ? 'clap' : 'd'}</button>
        <button>{hithatSound ? 'hithat' : 'f'}</button>
        <button>{kickSound ? 'kick' : 'g'}</button>
        <button>{openhatSound ? 'openhat' : 'h'}</button>
        <button>{rideSound ? 'ride' : 'j'}</button>
        <button>{snareSound ? 'snare' : 'k'}</button>
        <button>{tinkSound ? 'tink' : 'l'}</button>
      </div>
    </div>
  )
}

// Hook
