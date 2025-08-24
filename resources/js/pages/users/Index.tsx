import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { User, columns } from '../users/components/columns';

export default function UserIndex({ users }: { users: User[] }) {
    return (
        <AppLayout>
            <Head title="Users Page" />
            <div className="container mx-auto p-10">
                <DataTable columns={columns} data={users} />
            </div>
        </AppLayout>
    );
}
