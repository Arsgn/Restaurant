'use client'
import { FC } from 'react';
import scss from './Contacts.module.scss';

export const Contacts: FC = () => {
    return (
        <section className={scss.Contacts}>
            <div className='container'>
                <div className={scss.content}>Contacts</div>
            </div>
        </section>
    );
};
