import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

import { PencilLine } from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/Pugialli.png" />
                <strong>João Paulo Pugialli</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}