import React, { useState, useEffect } from 'react'
import { Checkbox} from "antd"
import CitySelect from '../Components/CitySelect';
import NationalitySelect from '../Components/NationalitySelect'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Client from '../Types/Client'
import {AddClient} from '../Actions/ClientsActions'
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { RouteComponentProps} from "react-router-dom"
import {GetClient} from '../Actions/ClientsActions'
import { useHistory } from "react-router-dom";
import PassportNumberMasked from '../Components/PassportNumberMasked'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 600,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);
type TParams = {id: string};
 const UserForm = ({match}: RouteComponentProps<TParams>) => {
    const [client, setClient] = useState(new Client());
    const history = useHistory();
     useEffect(() => {
         const fetchData = async() => {
         const data = await GetClient(match.params.id);
         setClient(data);
         setName(data.name);
         setSurame(data.surname);
         setP(data.patronymic);
         setD(data.birthdate);
         setPs(data.passportSeries);
         setPn(data.passportNumber);
         setKv(data.authority);
         setDv(data.dateOfIssue);
         setId(data.passportId);
         setBp(data.placeOfBirth);
         setC(data.cityOfResidence!);
         setAPr(data.addressOfResidence);
         setHp(data.homePhone);
         setMp(data.mobilePhone);
         setE(data.email);
         setJ(data.jobPlace);
         setDol(data.position);
         setCp(data.cityOfRegistration!);
         setAp(data.addressOfResidence);
         setSp(data.maritalStatus!);
         setNat(data.nationality!);
         setInv(data.disability!);
         setPen(data.pensioner);
         setM(data.salary);
     };

        if (match.params.id != undefined)
        fetchData()}, [])
    const classes = useStyles();
    const [name, setName] = useState(client?.name);
    const [surname, setSurame] = useState(client?.surname);
    const [p, setP] = useState(client?.patronymic);
    const [d, setD] = useState(client?.birthdate);
    const [ps, setPs] = useState(client?.passportSeries);
    const [pn, setPn] = useState(client?.passportNumber);
    const [kv, setKv] = useState(client?.authority);
    const [dv, setDv] = useState(client?.dateOfIssue);
    const [id, setId] = useState(client?.passportId);
    const [bp, setBp] = useState(client?.placeOfBirth);
    let city = client?.cityOfResidence != null? client?.cityOfResidence: "Минск";
    const [c, setC] = useState(city);
    const [aPr, setAPr] = useState(client?.addressOfResidence);
    const [hp, setHp] = useState(client?.homePhone);
    const [mp, setMp] = useState(client?.mobilePhone);
    const [e, setE] = useState(client?.email);
    const [j, setJ] = useState(client?.jobPlace);
    const [dol, setDol] = useState(client?.position);
    let cityReg = client?.cityOfRegistration != null? client?.cityOfRegistration: "Минск";
    const [cp, setCp] = useState(cityReg);
    const [ap, setAp] = useState(client?.addressOfRegistration);
    let maritalStatus = client?.maritalStatus != null? client?.maritalStatus: "Холост";
    const [sp, setSp] = useState(maritalStatus);
    let nationality = client?.nationality != null? client?.nationality: "Беларусь";
    const [nat, setNat] = useState(nationality);
    const disability = client?.disability != null ? client.disability: "Нет";
    const [inv, setInv] = useState(disability);
    const [pen, setPen] = useState(client?.pensioner);
    const [m, setM] = useState(client?.salary);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let newClient = new Client();
        if (client !== undefined)
            newClient.id = client.id;
        newClient.name = name;
        newClient.surname = surname;
        newClient.patronymic = p;
        newClient.birthdate = d;
        newClient.passportSeries = ps;
        newClient.passportNumber = pn;
        newClient.authority = kv;
        newClient.dateOfIssue = dv;
        newClient.passportId = id;
        newClient.cityOfResidence = c;
        newClient.addressOfResidence = aPr;
        newClient.homePhone = hp;
        newClient.mobilePhone = mp;
        newClient.email = e;
        newClient.jobPlace = j;
        newClient.position = dol;
        newClient.placeOfBirth = bp;
        newClient.addressOfRegistration = ap;
        newClient.cityOfRegistration = cp;
        newClient.maritalStatus = sp;
        newClient.nationality = nat;
        newClient.disability = inv;
        newClient.pensioner = pen;
        newClient.salary = m;
        const response = await AddClient(newClient);
        if (response?.error === "")
        {
            history.push("/clients");
        }
        else 
        {
            alert(response.error);
        }

    };
    return(
    <Container> 
        <form onSubmit = {onSubmit}>
            <div>
            <TextField label = "Имя" required className = {classes.formControl} 
            value = {name}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
            {
                setName(e.target.value);
            }}/>
            </div>
            <div>
            <TextField  label = "Фамилия" required className = {classes.formControl}
            value = {surname}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setSurame(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Отчество" required className = {classes.formControl}
            value = {p}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setP(e.target.value);
                }}/>
            </div>
            <br/>
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker  label = "Дата рождения" className = {classes.formControl}
            value = {d}
            format="MM/dd/yyyy"
            disableToolbar
            variant="inline"
            required
            onChange = {(e) =>
                {
                    setD(e as Date);
                }}/>
                </MuiPickersUtilsProvider>
            </div>
            <div>
            <TextField  label = "Серия паспорта" required className = {classes.formControl}
            value = {ps}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setPs(e.target.value);
                }}
           />
            </div>
            <div>
            <TextField  label = "Номер паспорта" required className = {classes.formControl}
            value = {pn}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setPn(e.target.value);
                }}
                InputProps = {{
                    inputComponent: PassportNumberMasked as any,
                }}/>
            </div>
            <div>
            <TextField  label = "Кем выдан" required className = {classes.formControl}
            value = {kv}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setKv(e.target.value);
                }}/>
            </div>
            <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker label = "Дата выдачи" className = {classes.formControl}
            value = {dv}
            format="MM/dd/yyyy"
            disableToolbar
            variant="inline"
            required
            onChange = {(e) =>
                {
                    setDv(e as Date);
                }}/>
             </MuiPickersUtilsProvider>
            </div>
            <div>
            <TextField  label = "Идентификационный номер" required className = {classes.formControl}
            value = {id}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setId(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Место рождения" required className = {classes.formControl}
            value = {bp}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setBp(e.target.value);
                }}/>
            </div>
            <div>
            <CitySelect label = "Город проживания"
            onChange = {(e) =>
                {
                    if (typeof e.target.value == "string")
                        setC(e.target.value.toString());
                }}
                value = {c}/>
            </div>
            <div>
            <TextField  label = "Адрес проживания" required className = {classes.formControl}
            value = {aPr}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setAPr(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Телефон домашний" className = {classes.formControl}
            value = {hp}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setHp(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Телефон мобильный" className = {classes.formControl}
            value = {mp}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setMp(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Email" className = {classes.formControl}
            value = {e}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setE(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Место работы" className = {classes.formControl}
            value = {j}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setJ(e.target.value);
                }}/>
            </div>
            <div>
            <TextField  label = "Должность" className = {classes.formControl}
            value = {dol}
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setDol(e.target.value);
                }}/>
            </div>
            <div>
            <CitySelect label = "Город прописки"
            onChange = {(e) =>
                {
                    if (typeof e.target.value == "string")
                        setCp(e.target.value.toString());
                }}
                value = {cp}/>
            </div>
            <div>
            <TextField  label = "Адрес прописки" required className = {classes.formControl}
            value = {ap }
            InputLabelProps={{ shrink: true }}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setAp(e.target.value);
                }}/>
            </div>
            <div>
            <FormControl required className = {classes.formControl}>
                <InputLabel id="sp">Семейное положение</InputLabel>
                    <Select 
                        labelId = "sp" 
                        className={classes.selectEmpty}
                        value = {sp}
                        defaultValue = "Холост"
                        onChange = {(e) =>
                            {
                                if (typeof e.target.value == "string")
                                    setSp(e.target.value.toString());
                            }}>
                            <MenuItem value="Холост">Холост</MenuItem>
                            <MenuItem value="Женат/Замужем">Женат/Замужем</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <br/>
            <div>
            <NationalitySelect onChange = {(e) =>
            {
                if (typeof e.target.value == "string"){
                    setNat(e.target.value.toString());
                }

            }}
            value = {nat}/>
            </div>
            <br/>
            <div>
            <FormControl required className = {classes.formControl}>
                <InputLabel id="inv">Инвалидность</InputLabel>
                    <Select 
                        labelId = "inv" 
                        className={classes.selectEmpty}
                        value = {inv}
                        defaultValue = "Нет"
                        onChange = {(e) =>
                            {
                                if (typeof e.target.value == "string")
                                 setInv(e.target.value.toString());
                            }}>
                            <MenuItem value="Нет">Нет</MenuItem>
                            <MenuItem value="1 группа">1 группа</MenuItem>
                            <MenuItem value="2 группа">2 группа</MenuItem>
                            <MenuItem value="3 группа">3 группа</MenuItem>
                            <MenuItem value="4 группа">4 группа</MenuItem>
                    </Select>
            </FormControl>
            </div>
            <br/>
            <div>
            <Checkbox 
            checked = {pen}
            onChange ={ (e)=> 
                setPen(e.target.checked)}>Пенсионер</Checkbox>
            </div>
            <div>
            <TextField label = "Ежемесячный доход" type = "number" 
            value = {m}
            InputLabelProps={{ shrink: true }}
            className = {classes.formControl}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) =>
                {
                    setM(+e.target.value);
                }}/>
            </div>
            <br/>
            <Button type = "submit" color="primary">Отправить</Button>
        </form> 
    </Container>
    );
}

export default UserForm