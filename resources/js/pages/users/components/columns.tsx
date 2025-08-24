'use client';

import { ColumnDef } from '@tanstack/react-table';

export type User = {
    id: string;
    name: string;
    mobile: string;
    department: string;
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
];
