import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Card } from 'react-bootstrap';
// import Api from "@evenlogics/whf-api";

const StudentsAdd = (props) => {

    const { id } = props.match.params

    let fields = {
        // profile_image: {
        //     type: 'file',
        //     label: 'Profile Image',
        //     required: true,
        //     className: 'form-control-lg',
        //     col: 2,
        // },
        name: {
            type: 'text',
            label: "Name",
            required: true,
            min: 0,
            col: 3,
            name: 'name',
            placeholder: 'Entre Your Name',
            className: 'form-control-lg',
        },
        email: {
            type: 'email',
            label: "Email",
            required: true,
            min: 0,
            col: 3,
            name: 'email',
            placeholder: 'Entre Your Email',
            className: 'form-control-lg',
        },
        password:{
            type:'password',
            label:'Password',
            required:true,
            min:8,
            col:3,
            name:'password',
            placeholder:'Enter Password',
            className:'form-control-lg'
        },
        confirmpassword:{
            type:'password',
            label:'Password',
            required:true,
            min:8,
            col:3,
            oneOf:'password',
            name:'confirmpassword',
            placeholder:'Enter Password',
            className:'form-control-lg'
        },
        country:{
            type:'advanceSelect',
            label:'Select Your Fav City',
            className: "form-control-lg",
            name: "country",
            
            options:[{
                value:1,
                label:'Pakistan'
            },{
                value:2,
                label:"UK"
            },{
                value:3,
                label:"Italy"
            },{
                value:4,
                label:'India'
            },{
                value:5,
                label:'USA'
            },{
                value:6,
                label:'Japan'
            },{
                value:7,
                label:'China'
            },{
                value:8,
                label:'Germany'
            },{
                value:9,
                label:'France'
            },{
                value:10,
                label:'Thiland'
            }],
            col:3,
            // callback: (data) => {console.log(data)},

        },
        // phonenumber: {
        //     type: 'number',
        //     label: "Phone Number",
        //     required: true,
        //     min: 0,
        //     col: 3,
        //     name: 'phonenumber',
        //     placeholder: 'Entre Your Phone Number',
        //     className: 'form-control-lg',
        // },
        // user_id:{
        //             type: "advanceSelect",
        //             label: "Select Center Admin",
        //             target: "users?role=center admin&limit=10000",
        //             className: "form-control-lg",
        //             name: "user_id",
        //     optionValue:'id',
        //     optionLabel:'username',
        //             col: 3,
        //             required: true,
        //     //         condition : loginUser === "admin" ? true : false
        //           },
        // id:{
        //                 type: "advanceSelect",
        //                 label: "Select Center Admin",
        //     //             target: 'centers',
        //     options:[{
        //         id:1,
        //         label:"test",
                
        //     },{
        //         id:2,
        //         label:"test 2",
        //     }],
        //     //             async: true,
        //                 col: 4,
        //                 callback: (data) => {console.log(data)},
        // },
        // color: {
        //     type: 'color',
        //     label: "Color",
        //     required: true,
        //     col: 2,
        //     name: 'color',
        //     placeholder: 'Select Your Fav Color',
        //     className: 'form-control-lg',
        // },
        // switch: {
        //     type: 'switch',
        //     label: "Switch",
        //     required: true,
        //     col: 2,
        //     name: 'switch',
        //     placeholder: 'Select Yes or No',
        //     className: 'form-control-lg',
        // },
        //       nic: {
        //         type: 'text',
        //         label: "NIC",
        //         required: true,
        //         name: 'nic',
        //         col: 3,
        //         placeholder: 'Enter Your NIC',
        //         className: 'form-control-lg',
        //       },
        //       latest_weight : {
        //         type: 'number',
        //         label: "Weight (KG's)",
        //         required: true,
        //         name: 'latest_weight',
        //         min:0,
        //         col: 3,
        //         placeholder: 'Enter Weight',
        //         className: 'form-control-lg',
        //         condition:id ? true : false
        //         },
        //       weight: {
        //         type: 'number',
        //         label: "Weight (KG's)",
        //         required: true,
        //         name: 'weight',
        //         min:0,
        //         col: 3,
        //         placeholder: 'Enter Weight',
        //         className: 'form-control-lg',
        //         condition:id ? false : true
        //       },

    }

    //   const submitForm = (data) => {
    //     console.log(data,'data')

    //     const payload = {
    //       nic : data.nic,
    //       weight: data.latest_weight,
    //     // firstname:data.firstname,
    //     // email:data.email,
    //     // number:data.number,
    //       _method:'patch'
    //     }

    //     Api.request("post",`/addStudents/${id}`, payload)
    //     .then((res) => {
    //       console.log(res,'res')
    //       props.history.push('/addStudents')
    //     })
    //     .catch((error) => console.log(error));
    //   }

    // const successSubmit = () => {
    //   console.log("aaaa")
    // }


    return (
        <>
            <h2>White Falcon Add Students </h2>
            <Card className="animated fadeIn globalCard">
                <Card.Header >
                    <h4> {`${id ? 'Update ' : 'Add New '} Customer`}   </h4>
                </Card.Header>
                <Card.Body>
                    <FormGenerator
                        targetEntity={'students'}
                        fields={fields}
                        targetId={id}
                        //           targetSubmit={id ? submitForm : null}
                        // successCallback={successSubmit}
                        // extraVals={{ _method: id ? 'patch' : null, category_id: location.category?.id ?? "" }}
                        name="users"
                        redirect="students"
                    />
                </Card.Body>
            </Card></>
    )
}

export default StudentsAdd