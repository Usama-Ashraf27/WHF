export default [
   {
    name:'Users',
    component: require('../Modules/Users'),
    status:true,
    order:1,
   },
   {
      name:'Teachers',
      component:require('../Modules/Users'),
      status:true,
      order:3,
   },{
      name:'Students',
      component:require('../Modules/Users'),
      status:true,
      order:2,
   },
   {
      name:'AddStudents',
      component:require('../Modules/Users')
   }
];