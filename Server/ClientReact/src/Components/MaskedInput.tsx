import React from 'react'
import MaskedInput from 'react-text-mask';

interface TextMaskCustomProps {
    inputRef: (ref: HTMLInputElement | null) => void;
    mask?: RegExp[];
  }
  
 const CustomMaskedInput = (props: TextMaskCustomProps) => {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref: any) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={props.mask}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

  export default CustomMaskedInput;