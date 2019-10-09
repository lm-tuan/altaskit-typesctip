import React, {Component} from 'react';

interface CountProps {
    num:number
}

export class Counter extends Component<CountProps, {}> {
  static defaultProps = {
    num:100
  }
  render(){
    return (
        <div>
            {this.props.num}
        </div>
    );
  }
  
}

export default Counter;
