import { NavItem } from '@/types';

export interface BaseImplementation  {
  purchaseOrderId: number;
  purchaseOrderCreationDate: string;
  purchaseOrderNumber: string;
  purchaseOrderIssueDate: string;
  readTime: string;
  expectedDeliveryDate: string;
  unitPriceDdp: number;
  totalCostDdp: number;
  unitPriceCip: number;
  totalCostCip: number;
  currency: string;
  orderQuantity: number;
  receivedQuantity: number;
  receivedDate: string;
  balancedQuantity: number;
  shipmentStatus: string;
  comments: string;
}

// ✅ Item extends BaseImplementation
export interface Implementation extends BaseImplementation {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface BaseItem {
  itemName: string;
  itemType: string;
  itemCategory: string;
  division: string;
  packSize: string;
  unitCost: number;
  plannedQuantity: number;
  totalCost: number;
  revisedQuantity: number;
  secondReview: number;
  fundingSource: string;
  plannedOrderDate: string;
  plannedDeliveryDate: string;
}

// ✅ Item extends BaseItem
export interface Item extends BaseItem {
  id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}


export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Home',
    url: '/admin',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Teachers',
    url: '/teacher',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'student',
    url: '/student',
    icon: 'kanban',
    shortcut: ['x', 'x'],
    isActive: false,
    items: [] // No child items
  },
  // {
  //   title: 'Implementation',
  //   url: '/inspect',
  //   icon: 'kanban',
  //   shortcut: ['i', 'i'],
  //   isActive: false,
  //   items: [] // No child items
  // },
  /*{
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
        icon: 'login'
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];

export interface SaleUser {
  id: number;
  name: string;
  email: string;
  amount: string;
  image: string;
  initials: string;
}

export const recentSalesData: SaleUser[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    amount: '+$1,999.00',
    image: 'https://api.slingacademy.com/public/sample-users/1.png',
    initials: 'OM'
  },
  {
    id: 2,
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/2.png',
    initials: 'JL'
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    amount: '+$299.00',
    image: 'https://api.slingacademy.com/public/sample-users/3.png',
    initials: 'IN'
  },
  {
    id: 4,
    name: 'William Kim',
    email: 'will@email.com',
    amount: '+$99.00',
    image: 'https://api.slingacademy.com/public/sample-users/4.png',
    initials: 'WK'
  },
  {
    id: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    amount: '+$39.00',
    image: 'https://api.slingacademy.com/public/sample-users/5.png',
    initials: 'SD'
  }*/
];