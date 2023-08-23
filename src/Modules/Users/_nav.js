export default {
      Users: {
            _tag: 'CSidebarNavItem',
            name: 'Users',
            phrase: 'Users',
            to: '/users',
            icon: 'fas fa-users',
            order: 1,
            roles: ["admin"],
          },
   
          Students: {
                _tag: 'CSidebarNavItem',
                name: 'Students',
                phrase: 'Students',
                to: '/students',
                icon: 'fas fa-users',
                order: 2,
                roles: ["admin"],
              },
        Teachers:{
              _tag: 'CSidebarNavItem',
            name:'Techers',
            phase:'Teachers',
            to:'/teachers',
            icon: 'fas fa-users',
            order:3,
            roles: ["admin"],
        }
 }