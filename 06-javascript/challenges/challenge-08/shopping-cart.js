const cart = createShoppingCart();


function createShoppingCart(){
    let discount =0;
    let Items=[];
    //console.log(Items);

    return {
        addItem(newItem){
            const existing = Items.find(i=>i.id===newItem.id);
            if(existing){
                existing.quantity = existing.quantity + newItem.quantity;
                console.log(Items);
            }
            else{

                // console.log(newItem);
                console.log('first: ',Items);
                Items.push({...newItem});
                // Items = [...newItem];
            }
                
               // console.log("osthunna")
            
            // if(existing){
            //     id.quantity += 1;
            // }
            // console.log(Items);


            
        },  
        getItems(){
            // console.log(Items);
            return Items;

        },
        
        updateQuantity(reqId, incquan ){
         const item = Items.find(i=>i.id===reqId);
         if(item){
            // console.log(item.quantity);
            item.quantity= incquan;
            console.log(item.quantity);
         }
        },

         removeItem(remId){
            //console.log(remId);
            Items = Items.filter(i=>i.id!==remId); 
            //console.log(Items);


         },



        
        getTotal(){

           let total= Items.reduce((total,i) => total + i.price*i.quantity ,0);
            total = total-discount;
            
           
             const discounted = total - (total * discount) / 100;
             console.log(discounted);

          
            return total;
         },
        getItemCount(){
           const total= Items.reduce((total,i) => total + i.quantity ,0);
           console.log(Items);


            console.log(total);
            return total;
         },
         isEmpty(){
            if(Items==0){
                return true;
            }
            else {
                return false;
            }
         },
         
         // getTotal();
         // getItemCount();
         // isEmpty();
         // applyDiscount();
         // clear();
        
        applyDiscount(code, percent){
            // console.log(code);
            // let num = code.replace("SAVE"," ");
            // num = Number(num);
            // console.log(num);
            
            // let price = 2997;
            // // console.log(price);
            //  discount = price * (percent/100);
            // const finalAmount = price-discount;
            // console.log(finalAmount);
            // return finalAmount;
            
            if (percent > 0){
                

                
                discount = percent;
            } 
            

        },
        clear(){
            Items = [];

        
        }
}
}



cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 });
console.log("why");
cart.addItem({ id: 2, name: 'Mouse', price: 29, quantity: 2 });
cart.addItem({ id: 1, name: 'Laptop', price: 999, quantity: 1 }); // Should increase quantity

console.log(cart.getItems());
// [{ id: 1, name: 'Laptop', price: 999, quantity: 2 }, { id: 2, name: 'Mouse', price: 29, quantity: 2 }]

cart.updateQuantity(1, 3);  // Set laptop quantity to 3
cart.removeItem(2);         // Remove mouse

console.log(cart.getTotal());        // 2997
console.log(cart.getItemCount());    // 3
console.log(cart.isEmpty());         // false

cart.applyDiscount('SAVE10', 10);    // 10% discount
console.log(cart.getTotal());        // 2697.30

cart.clear();
console.log(cart.isEmpty());         // true