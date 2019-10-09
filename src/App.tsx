import React, {Component} from 'react';
import Counter from './components/counter';
import PageCustoms from './components/pageCustoms';
interface CountState {
    num:number
}

export class App extends Component<{}, CountState> {
  state={
    num:0
  }
  inCrease = () => {
      this.setState({
        num:this.state.num + 1
      })
  }
  render(){
    return (
      <div className="App">
         <PageCustoms/>
      </div>
    );
  }
  
}

export default App;
