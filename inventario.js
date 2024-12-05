
const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

//1. Filtrar Productos con Descuento

const prodDiscount = products.filter(products => 
products.discount > 0)

console.log(prodDiscount)

//2. Calcular el Precio Final con Descuento

const afterPrice = prodDiscount.map ((products) =>  {
    return products.price - (products.price * products.discount / 100) 
})

console.log("Precio final con descuento: " + afterPrice)

//3. Identificar Productos con Stock Bajo

const prodLowStock = products.filter(products => 
    products.stock < 5)
    
    console.log(prodLowStock)

/* 4. Actualizar el Stock de un Producto.
Perdon profe no supe hacerlo :(*/

// 5. Resumen por Categorías

const getCategorySummary = (products) => {
    const categorySummary = {}
    
    for(const product of products) {
      if(!categorySummary[product.category]) {
        categorySummary[product.category] = 0
      }
      
      categorySummary[product.category]++
    }
    
    return categorySummary;
  }
  
  console.log(getCategorySummary(products))
