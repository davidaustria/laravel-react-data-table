import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function UserIndex() {
    return (
        <AppLayout>
            <div>
                <Head title="Users Page" />
            </div>
        </AppLayout>
    );
}
