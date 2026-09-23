import styles from '../styles/styles.module.css';
import { UseProducts } from '../hooks/useProducts';
import { createContext, JSX } from 'react';
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
export const { Provider } = ProductContext;

export interface ProductCardProps {
    product: Product;
    onChange?: (props: onChangeArgs) => void;
    /*  children?: ReactElement | ReactElement[]; */
    children: (props: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: React.CSSProperties,
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: ProductCardProps) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = UseProducts({ product, onChange, value, initialValues });

    return (
        <Provider value={{ counter, increaseBy, product, maxCount, isMaxCountReached }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children(
                    {
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    }
                )}
            </div>
        </Provider>
    );
}
