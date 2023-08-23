import React from "react";
import RemoteTable from "@evenlogics/whf-remote-table";



const Students = (props) => {
    const defaultSorted = [{ dataField: "id", order: "desc" }];
    const [refresh] = React.useState(false);

    const columns = [
        {
            dataField: "profile_image",
            text: "Image",
            align: "center",
            headerAlign: "center",
            sort: true,
            formatter: (cell, row) => {
                console.log(row)
                return <img src={row.profile_image} alt={`Profile of ${row.name}`} width="60" />;

            },
        },
        {
            dataField: "id",
            text: "ID",
            align: 'center',
            headerAlign: 'center',
            sort: true,
        },
        {
            dataField: "name",
            text: "First name",
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
            dataField: "academic_level",
            text: "Academic Level",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        },
        {
            dataField: "limit",
            text: "Limit",
            sort: true,
            align: 'center',
            headerAlign: 'center'
        }, {
            dataField: "group",
            text: "Group",
            sort: true,
            align: 'center',
            headerAlign: 'center',
            formatter: (cell, row) => {
                const groupInfo = row.group;
                // console.log(row.group)
                // console.log(`Group id is  ${groupInfo.id}`);
                return groupInfo.id;
                //     if (groupInfo) {
                //       const formattedGroup = 
                //     //    groupInfo.created_at
                //         groupInfo.id
                // //         groupInfo.parent_id
                // //    groupInfo.student_question_id
                // //        groupInfo.title
                // //        groupInfo.updated_at
                // //         groupInfo._lft
                // //         groupInfo._rgt
                //       ;
                //       return formattedGroup;
                //     }
            }
        },
        {
            dataField: "is_blocked",
            text: "Status",
            sort: true,
            align: 'center',
            headerAlign: 'center',
            formatter: (cell) => {
                return cell === 0 ? "Blocked" : "Active";
            },
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
        <>
 <h2>White Falcon Students </h2>
            <RemoteTable
                entity={"students"}
                customEntity={"students"}
                columns={columns}
                sort={defaultSorted}
                hideActionCol={true}
                showAdvanceFilters={true}
                Query={refresh}
                addRoute='/addStudents'
            />

        </>
    )
}

export default Students
