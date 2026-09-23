# Do Products Pack

Paquete de Pruebas React Pro

## Example : 

```tsx
 <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
            count: 4,
            maxCount: 10,
        }}
    >{({ reset, count, increaseBy, isMaxCountReached }) => (
        <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            <button className={`${isMaxCountReached ? styles.disabled : ""}`} onClick={() => increaseBy(2)}>+2</button>
            <div >{count}</div>
        </>
    )}</ProductCard>
```