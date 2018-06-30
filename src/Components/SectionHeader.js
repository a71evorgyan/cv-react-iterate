import React from 'react';

// const SectionHeader = ({title}) => (
//   <div>
//     <h1>{title}</h1>
//     <hr></hr>
//   </div>
// );

class SectionHeader extends React.Component {
  render() {
    return(
      <div>
      <h1>{this.props.title}</h1>
      <hr></hr>
    </div>
    );
  }
}

export default SectionHeader;
