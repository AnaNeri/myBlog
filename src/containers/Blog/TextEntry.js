import React from 'react';


function TextEntry({title="Tmp title", text="Hi"}) {
  return (
    <div>
      <div>
        {title}
      </div>
          {text}
    </div>
  );
}

export default TextEntry;
