import React from 'react';

const Title = ({ text, className }) => {
  return (
    <div>
      <h1 className={className}>
        {text}
      </h1>
    </div>
  );
}

export default Title;