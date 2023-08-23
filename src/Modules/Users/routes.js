import React from "react";
const Teachers = React.lazy(() => import("./Teachers"));
const Users = React.lazy(() => import("./List"));
const Students = React.lazy(() => import("./Students"));
const AddStudents = React.lazy(() => import("./AddStudents"));

const routes = {
  Users: {
    path: "/users",
    exact: true,
    component: Users,
    roles: ["admin"],
    isPublic:false
  },
Teachers:{
    path: "/teachers",
    exact: true,
    component:Teachers,
    roles: ["admin"],
    isPublic:false
},
Students:{
    path:'/students',
    exact:true,
    component:Students,
    roles:["admin"],
    isPublic:false
},
AddStudents:{
    path:'/addStudents',
    exact:true,
    component:AddStudents,
    roles:["admin"],
    isPublic:false
}

   
//   UsersAdd: {
//     path: "/user/add",
//     exact: true,
//     component: UserAdd,
//     roles: ["admin"],
//     isPublic:false
//   },
//   UserEdit: {
//     path: "/users/:id/edit",
//     exact: true,
//     component: UserAdd,
//     roles: ["admin"],
//     isPublic:false
//   },
  
};

export default routes;