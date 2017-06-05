const state = {
  employees: [
    {id:1, name:'Joker',
    desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis ex eu justo laoreet consequat. Pellentesque nec neque vel ipsum lacinia egestas eu id sem.'},
    {id:2, name:'Ann Takamaki',
    desc:'Sed a massa a orci blandit luctus vitae quis magna. Aliquam ullamcorper lobortis orci. Cras eget turpis tellus. Phasellus nec.'},
    {id:3, name:'Ryuji Sakamoto',
    desc:'Ut fermentum tellus vitae tellus convallis, nec egestas quam interdum. Praesent at sollicitudin est. Curabitur nec rutrum velit. Suspendisse magna nisi, tempor et magna eget.'
    }
  ],

  services: [
  {id:1, name:'Palace Infiltration',
  desc: 'Need a palace infiltrated? We make sure that we do leave any traces behind and we will get you a full blue-print of all the areas including the hidden ones!',
  price: 500
  },
  ]
}

const getters = {

employees: state => {
  return state.employees;
},

services: state => {
  return state.services;
}

}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
