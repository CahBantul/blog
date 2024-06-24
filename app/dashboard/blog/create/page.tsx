'use client';
import React from 'react';
import BlogForm from '../../component/BlogForm';
import {BlogFormSchemaType} from '../../schema';
import {toast} from '@/components/ui/use-toast';
import {createBlog} from '@/lib/action/blog';
import {useRouter} from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const hancleCreate = async (data: BlogFormSchemaType) => {
        const result = await createBlog(data);
        const {error} = JSON.parse(result);

        if (error?.message) {
            toast({
                title: 'Fail to create blog',
                description: (
                    <pre className="mt-2 w-fullrounded-md bg-slate-950 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                ),
            });
        } else {
            toast({
                title: 'Succesfully created' + data.title,
            });

            router.push('/dashboard');
        }
    };
    return <BlogForm onHandleSubmit={hancleCreate} />;
}
