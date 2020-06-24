import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const UsersList = (props) => {

    
    
    

    const deleteUser = (user) => {
        swal('Delete User')
    }

    const renderActions = ({data}) => {
        console.log(data);
        return <React.Fragment>
            <button className="btn btn-sm btn-primary">
                <Link to={`/admin/users/edit/${data.id}`}>Edit</Link>
            </button>
            <button onClick={()=>deleteUser(data)} className="btn btn-sm btn-danger ml-2">Delete</button>
        </React.Fragment>
    }

    const state = {
        columnDefs: [
            { headerName: "First Name", field: "first_name", sortable: true, filter: 'agTextColumnFilter' },
            { headerName: "Last Name", field: "last_name" },
            { headerName: "Email", field: "email" },
            { headerName: "Actions", cellRenderer: 'actionCellRenderer' }],
        rowData: [
            { first_name: "John", last_name: "Doe", email: 'johndoe@gmail.com', id:1 },
            { first_name: "Ford", last_name: "Mondeo", email: 'fordmondeo@gmai,l.com', id:1 },
            { first_name: "Ford", last_name: "Mondeo", email: 'fordmondeo@gmail.com',id:1 },
            { first_name: "Ford", last_name: "Mondeo", email: 'fordmondeo@gmail.com',id:1 },
            { first_name: "Porsche", last_name: "Boxter", email: 'porscheboxter@gmail.com',id:2 }]
    }

    const gridOptions = {
        defaultColDef: {
            flex: 1
        },
        paginationPageSize: 10,
        pagination: true,
        frameworkComponents: {
            actionCellRenderer: renderActions
        }
    };


    return (
        <div className="card">
            <div className="card-header">
                <strong>Users</strong>
            </div>
            <div className="card-body">
                <div className="ag-theme-alpine grid-container">
                    <AgGridReact
                        gridOptions={gridOptions}
                        columnDefs={state.columnDefs}
                        rowData={state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        </div>
    )
}

export default UsersList;