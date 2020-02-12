import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
    label: string,
    onChange?:((event: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>, child: React.ReactNode) => void) | undefined
    value?: string
}

const CitySelect =  (props: propsInterface) => {
    const classes = useStyles();
    return(
    <FormControl required className = {classes.formControl}>
<InputLabel id="live-city">{props.label}</InputLabel>
        <Select 
            labelId = "live-city" 
            className={classes.selectEmpty}
            defaultValue = "Минск"
            required
            value = {props.value}
            onChange = {props.onChange}>
        <MenuItem value="Минск">Минск</MenuItem>
        <MenuItem value="Гродно">Гродно</MenuItem>
        <MenuItem value="Брест">Брест</MenuItem>
        <MenuItem value="Могилёв">Могилёв</MenuItem>
        <MenuItem value="Гомель">Гомель</MenuItem>
        <MenuItem value="Молодечно">Молодечно</MenuItem>
        <MenuItem value="Витебск">Витебск</MenuItem>
        </Select>
    </FormControl>
    )
}

export default CitySelect;