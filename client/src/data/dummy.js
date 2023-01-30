import React from 'react';
import { AiOutlineDashboard, AiOutlinePieChart, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';

export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'My dashboard',
          icon: <AiOutlineDashboard/>,
        },
      ],
    },
  
    // {
    //   title: 'Pages',
    //   links: [
    //     {
    //       name: 'orders',
    //       icon: <AiOutlineShoppingCart />,
    //     },
    //     {
    //       name: 'employees',
    //       icon: <AiOutlineShoppingCart />,
         
    //     },
    //     {
    //       name: 'customers',
    //       icon: <AiOutlineShoppingCart />,
          
    //     },
    //   ],
    // },
    // {
    //   title: 'Apps',
    //   links: [
    //     {
    //       name: 'calendar',
    //       icon: <AiOutlineShoppingCart />,
          
    //     },
    //     {
    //       name: 'kanban',
    //       icon: <AiOutlineShoppingCart />,
          
    //     },
    //     {
    //       name: 'editor',
    //       icon: <AiOutlineShoppingCart />,
          
    //     },
    //     {
    //       name: 'color-picker',
    //       icon: <AiOutlineShoppingCart />,
          
    //     },
    //   ],
    // },
    {
      title: 'Charts',
      links: [
        {
          name: 'line',
          icon: <AiOutlineStock />,
        },
        {
          name: 'area',
          icon: <AiOutlineAreaChart />,
        },
  
        {
          name: 'bar',
          icon: <AiOutlineBarChart />,
        },
        {
          name: 'pie',
          icon: <AiOutlinePieChart />,
          
        },
      
      ],
    },
  ];