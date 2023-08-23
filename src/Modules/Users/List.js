
import React from "react";
import RemoteTable from "@evenlogics/whf-remote-table";

const List = () => {
  const defaultSorted = [{ dataField: "id", order: "desc" }];
  const [refresh] = React.useState(false);

  const columns = [
    {
      dataField: "id",
      text: "ID",
      align: 'center',
      headerAlign: 'center',
      sort: true,
    },
    {
      dataField: "username",
      text: "Username",
      sort: true,
      align: 'center',
      headerAlign: 'center'
    },
    {
      dataField: "first_name",
      text: "First Name",
      sort: true,
      align: 'center',
      headerAlign: 'center'
    }, {
      dataField: "last_name",
      text: "Last Name",
      sort: true,
      align: 'center',
      headerAlign: 'center'
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      align: 'center',
      headerAlign: 'center'
    },
    {
      dataField: "phone_number",
      text: "Phone number",
      sort: true,
      align: 'center',
      headerAlign: 'center'
    },
    {
      dataField: "roles",
      text: "Roles",
      sort: true,
      align: 'center',
      headerAlign: 'center',
      formatter: (cell, row) => {
        console.log(row)
        const rolesInfo = row.roles;
        return rolesInfo ? rolesInfo.map(role => role.name) : '';

      }
    },
    {
      dataField: "created_at",
      text: "Ceated Id Time",
      sort: true,
      align: 'center',
      headerAlign: 'center',
      formatter: (cell) => {
        const formattedDate = new Date(cell).toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
        });

        return formattedDate;
      }
    },
    {
      dataField: "updated_at",
      text: "Updated Time",
      sort: true,
      align: 'center',
      headerAlign: 'center',
      formatter: (cell) => {
        const formattedDate = new Date(cell).toLocaleDateString('en-PK', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
        });

        return formattedDate;
      }
    },
  ]
  return (
    
    <> <h2>White Falcon Add Students </h2>
      <RemoteTable
        entity={"users"}
        customEntity={"users"}
        columns={columns}
        sort={defaultSorted}
        hideActionCol={true}
        showAdvanceFilters={true}
        Query={refresh}
      />
    </>
  )
}

export default List
