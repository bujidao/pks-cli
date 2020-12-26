import {jsConst} from './jsFile'

function tsFunc (msg: string) {
  console.log(`Ts say: this is a function, i just want to tell you: ${msg}`)
}

function getJs() {
  console.log(`Ts say: this is a function, i just want to tell you: ${jsConst}`)
}

const tsConst = 'Hello TS;'

export {
  tsFunc,
  tsConst,
  getJs
}
