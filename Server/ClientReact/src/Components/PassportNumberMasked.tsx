import React from "react"
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
  }
  
 const PassportNumberMasked = (props: TextMaskCustomProps) => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask= {[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]}
      />
    );
  }

export default PassportNumberMasked