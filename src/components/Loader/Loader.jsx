import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
    return (
        <div ClassName={css.loader}>
            <InfinitySpin
                width='200'
                color="#941a1a"
            />
        </div>
    );
};