import { useEffect, useState } from 'preact/hooks'
import { Pane, SliderApi } from 'tweakpane'

export const App = function App() {
  let [demoValue, setDemoValue] = useState(5)

  useEffect(() => {
    // see tweakpane docs for how to use
    // https://cocopon.github.io/tweakpane/getting-started.html
    let pane = new Pane()
    let demoValueBlade = pane.addBlade({
      view: 'slider',
      label: 'brightness',
      min: 0,
      max: 10,
      value: 5,
      step: 0.5,
    }) as SliderApi;

    demoValueBlade.on('change', ev => setDemoValue(ev.value));
  }, []);

  return <>{demoValue}</>
}
