import React from 'react';

  const DynamicReportTemplate = {
    title: 'Activity Report',
    Fields: [
        {
            label:'Start Date',
            name:'startdate' ,
            type:'datepicker',
            title:'Start Date',
            required:{
                value:true,
                message:'Start Date is mandatory.'
            },
            dafaultDate:new Date()
           
        },
        {
            label:'End Date',
            name:'enddate' ,
            type:'datepicker',
            title:'End Date',
            required:{
                value:true,
                message:'End Date is mandatory.'
            },

           dafaultDate:new Date()
        },
        {
            label:'Lot',
            name:'lot' ,
            type:'text',
            title:'Lot',
            required:{
                value:false,
            }

        },
        {
            label:'Report in UoM',
            name:'reportinuom' ,
            type:'select',
            title:'Report in UoM',
            required:{
                value:false,
            },
            options: [
                {id: '0', name: 'Issue Unit'},
                {id: '1', name: 'Physical Unit'}
            ]
        
    },
    {
        label:'Detail Level',
        name:'detaillevel' ,
        type:'select',
        title:'Detail Level',
        required:{
            value:false,
        },
        options: [
            {id: '0', name: 'Totals'},
            {id: '1', name: 'Details'}
        ]
    
},
{
    label:'Viewer',
    name:'viewer' ,
    type:'select',
    title:'Viewer',
    required:{
        value:false,
    },
    options: [
        {id: '0', name: 'Standard'},
        {id: '1', name: 'Excel'}
    ]

},
{
    label:'Item',
    name:'item' ,
    type:'lookup',
    title:'Item',
    required:{
        value:false,
    }
    

}]
};

export default DynamicReportTemplate