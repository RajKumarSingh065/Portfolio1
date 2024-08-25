import React from 'react';
import { contact } from '../constants';
export default function Contact(){
    return(
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-10 text-center text-4xl">Get in Touch</h1>
            <div className="tracking-tighter text-center">
                    <p className="my-4">{contact.contact}</p>
                    <a href="#" className="border-b">{contact.email}</a>
                </div>
        </div>
    );
}