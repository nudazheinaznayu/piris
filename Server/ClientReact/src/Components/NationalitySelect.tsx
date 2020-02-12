import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

interface propsInterface {
    onChange?:((event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>, child: React.ReactNode) => void) | undefined,
    value: string
}

const NationalitySelect =  (props: propsInterface) => {
    const classes = useStyles();
    return(
    <FormControl required className = {classes.formControl}>
<InputLabel id="nation">Гражданство</InputLabel>
        <Select 
            labelId = "nation" 
            className={classes.selectEmpty}
            onChange = {props.onChange}
            value = {props.value}
            defaultValue = "Беларусь">
         <MenuItem value="Беларусь">Беларусь</MenuItem>
         <MenuItem value="Россия">Россия</MenuItem>
         <MenuItem value="Украина">Украина</MenuItem>
         <MenuItem value="Казахстан">Казахстан</MenuItem>
         </Select>
    </FormControl>
    )
}

export default NationalitySelect;