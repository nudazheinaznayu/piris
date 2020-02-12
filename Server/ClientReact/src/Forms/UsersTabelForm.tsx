import React, {useState, useEffect} from "react"
import {GetClients, DeleteClient} from "../Actions/ClientsActions"
import  Client  from "../Types/Client";
import MaterialTable, {Column} from 'material-table';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const columns = [{
        title: "Имя",
        field: "name"
    },
    {
        title: "Отчество",
        field: "patronymic",
    },
    {
        title: "Фамилия",
        field: "surname",
    },
    {
        title: "Дата рождения",
        field: "birthdate",
        format: "date"
        
    }
    ]

    interface TableState {
        columns: Array<Column<Client>>;
        data: Client[];
      }
const UsersTabelForm =() => {
    const history = useHistory();
    const [clients, setClients] = useState(Array<Client>());
    const [state, setState] = React.useState<TableState>({columns: columns, data: clients});
    async function getClients() {
        var clientsList = await GetClients();
        setState(prevState => 
            {
                const data = clientsList;
                return {...prevState, data};
            });
    };
    useEffect(()=>{
            getClients();
    },[]);
    return (
        <div>
            <br/>
            <div>
             <Button variant="contained" color="primary"
              onClick = {(e)=> {
                  history.push("/AddClient")
                }}>Добавить клиента</Button>
            </div>
            <br/>
             <MaterialTable
                title = "Клиенты"
                data = {state.data}
                columns = {state.columns}
                editable = {
                    {
                        onRowDelete: async oldData => {
                            await DeleteClient(oldData);
                            await getClients();
                        },
                        onRowUpdate: (oldData) => new Promise(()=>
                        {
                            history.push("updateClient"+"/"+oldData.id?.toString())
                        })
                    }
                }/>
                </div>
            )
    
}

export default UsersTabelForm