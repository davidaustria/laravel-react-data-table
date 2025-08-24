'use client';

import { ColumnDef } from '@tanstack/react-table';

export type User = {
    id: string;
    name: string;
    mobile: string;
    department: string;
    amount: number;
};

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'mobile',
        header: 'Mobile',
    },
    {
        accessorKey: 'department',
        header: 'Department',
    },
    {
        accessorKey: 'amount',
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('amount'));
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(amount);

            return <div className="text-right font-medium">{formatted}</div>;
        },
    },
];
