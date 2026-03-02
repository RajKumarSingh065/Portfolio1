import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Enter a valid email'),
    message: z.string().min(10, 'Message must be at least 10 characters')
});

export default function Contact() {
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
        resolver: zodResolver(schema)
    });

    async function onSubmit(data) {
        setStatus(null);
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS environment variables are not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.');
            }

            const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: serviceId,
                    template_id: templateId,
                    user_id: publicKey,
                    template_params: {
                        from_name: data.name,
                        from_email: data.email,
                        message: data.message
                    }
                })
            });

            if (!res.ok) throw new Error('Failed to send');
            setStatus('success');
            reset();
        } catch (e) {
            console.error(e);
            setStatus('error');
        }
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-16">
            <div className="w-full max-w-xl px-6">
                <h1 className="text-4xl text-center mb-8">Get in Touch</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1">Name</label>
                        <input
                            id="name"
                            className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Your name"
                            {...register('name')}
                        />
                        {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="you@example.com"
                            {...register('email')}
                        />
                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-1">Message</label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            placeholder="Questions about cybersecurity, development, or collaborations?"
                            {...register('message')}
                        />
                        {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-md bg-purple-600 hover:bg-purple-500 transition-colors px-4 py-2 font-medium"
                    >
                        {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                </form>

                {status === 'success' && (
                    <p className="mt-4 text-green-400 text-center">Thanks! Your message has been sent.</p>
                )}
                {status === 'error' && (
                    <p className="mt-4 text-red-400 text-center">Something went wrong. Please try again. Ensure EmailJS env variables are set.</p>
                )}
                {!import.meta.env.VITE_EMAILJS_SERVICE_ID && (
                    <p className="mt-4 text-yellow-400 text-center text-sm">Setup hint: add EmailJS keys to a .env file (see README).</p>
                )}
            </div>
        </section>
    );
}