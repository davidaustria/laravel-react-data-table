import { DataTable } from '@/components/ui/data-table';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { User, columns } from '../users/components/columns';

interface Props {
    users: {
        data: User[];
        next_page_url?: string | null | undefined;
        prev_page_url?: string | null | undefined;
    };
}

export default function UserIndex({ users }: Props) {
    return (
        <AppLayout>
            <Head title="Users Page" />
            <div className="container mx-auto p-10">
                <DataTable columns={columns} data={users.data} nextPageUrl={users.next_page_url} prevPageUrl={users.prev_page_url} />
            </div>
        </AppLayout>
    );
}
